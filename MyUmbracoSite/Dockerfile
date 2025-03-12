FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .

# Ensure writable directories
RUN mkdir -p wwwroot/media App_Data /https-certs && chmod -R 755 wwwroot App_Data /https-certs

# Set HTTPS Environment Variables
ENV ASPNETCORE_URLS="https://+:443;http://+:80"
ENV ASPNETCORE_Kestrel__Certificates__Default__Path="/https-certs/fullchain.pem"
ENV ASPNETCORE_Kestrel__Certificates__Default__KeyPath="/https-certs/privkey.pem"

EXPOSE 80 443
ENTRYPOINT ["dotnet", "MyUmbracoSite.dll"]
