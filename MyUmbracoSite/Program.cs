var builder = WebApplication.CreateBuilder(args);

builder.CreateUmbracoBuilder()
	.AddBackOffice()
	.AddWebsite()
	.AddComposers()
	.AddDeliveryApi()
	.Build();


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
