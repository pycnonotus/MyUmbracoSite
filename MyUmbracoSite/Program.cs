
using Umbraco.Cms.Core;

var builder = WebApplication.CreateBuilder(args);





builder.CreateUmbracoBuilder()
	.AddBackOffice()
	.AddWebsite()
	.AddComposers()
	.AddDeliveryApi()
	.Build();

builder.Services.AddControllers().AddJsonOptions(
	options =>
	{
		options.JsonSerializerOptions.MaxDepth = 64;
	});

var app = builder.Build();

await app.BootUmbracoAsync();


app.UseUmbraco()
	.WithMiddleware(u =>
	{
		u.UseBackOffice();
		u.UseWebsite();

	})
	.WithEndpoints(u =>
	{
		u.UseBackOfficeEndpoints();
		u.UseWebsiteEndpoints();
	});

await app.RunAsync();
