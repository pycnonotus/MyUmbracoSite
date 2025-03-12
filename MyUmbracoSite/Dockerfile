FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app
COPY . .
RUN dotnet publish -c Release -o /out

FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /out .

# Explicitly ensure writable directories exist with correct permissions
RUN mkdir -p wwwroot/media App_Data /https-certs && chmod -R 755 wwwroot App_Data /https-certs

# Copy SSL Certificate (Update Paths)
COPY /etc/letsencrypt/live/pycnonotus.dev/fullchain.pem /https-certs/fullchain.pem
COPY /etc/letsencrypt/live/pycnonotus.dev/privkey.pem /https-certs/privkey.pem

# Set ASP.NET to use HTTPS
ENV ASPNETCORE_URLS="https://+:443;http://+:80"
ENV ASPNETCORE_Kestrel__Certificates__Default__Path="/https-certs/fullchain.pem"
ENV ASPNETCORE_Kestrel__Certificates__Default__KeyPath="/https-certs/privkey.pem"

EXPOSE 80 443
ENTRYPOINT ["dotnet", "MyUmbracoSite.dll"]
