using System.Text.Json;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.PropertyEditors;
using Umbraco.Cms.Core.PropertyEditors.DeliveryApi;
using Umbraco.Cms.Core.PublishedCache;

namespace MyUmbracoSite.ButtonEditor;

public class ButtonEditorValueConverter(
    IPublishedContentCache publishedContentService,
    ILogger<ButtonEditorValueConverter> logger)
    : PropertyValueConverterBase, IDeliveryApiPropertyValueConverter
{
    private static readonly JsonSerializerOptions JsonSerializerOptions = new(JsonSerializerDefaults.Web);

    public override bool IsConverter(IPublishedPropertyType propertyType)
    {
        return propertyType.EditorUiAlias == Constns.ButtonEditorAlias;
    }

    public PropertyCacheLevel GetDeliveryApiPropertyCacheLevel(IPublishedPropertyType propertyType)
    {
        return PropertyCacheLevel.Elements;
    }

    public Type GetDeliveryApiPropertyValueType(IPublishedPropertyType propertyType)
    {
        return typeof(ButtonEditorDto);
    }

    public object? ConvertIntermediateToDeliveryApiObject(IPublishedElement owner, IPublishedPropertyType propertyType,
        PropertyCacheLevel referenceCacheLevel, object? inter, bool preview, bool expanding)
    {
        if (inter is null) return null;

        if (!TryExtract(inter, out var buttonEditor))
            logger.LogWarning("failed to extract ButtonEditorDto from {inter}", inter);

        if (buttonEditor is null) return null;

        var guid = buttonEditor.SelectedContent?.FirstOrDefault()?.Unique;
        if (guid is null)
        {
            logger.LogWarning("ButtonEditor does not contain any content");
            return null;
        }

        var publishedContent = publishedContentService.GetById(guid.Value);

        if (publishedContent is null)
        {
            logger.LogWarning("failed to find content with id {id}", guid.Value);
            return null;
        }

        return new ButtonEditorDto(buttonEditor.ButtonText, publishedContent.UrlSegment!);
    }

    private bool TryExtract(object obj, out ButtonEditorContentSlim? buttonEditor)
    {
        buttonEditor = null;
        try
        {
            var result = JsonSerializer.Deserialize<ButtonEditorContentSlim>(obj.ToString()!, JsonSerializerOptions)!;
            if (result.ButtonEnabled) buttonEditor = result; // if the button is not enabled, we can just ignore it

            return true;
        }
        catch (Exception e)
        {
            logger.LogTrace(e, "something unexpected happen while trying to Deserialize {obj}", obj);
            return false;
        }
    }

    public record ButtonEditorContentSlim(bool ButtonEnabled, string ButtonText, ICollection<SlimContent>? SelectedContent);

    public record SlimContent(Guid Unique);

    public record ButtonEditorDto(string Text, string Path);
}