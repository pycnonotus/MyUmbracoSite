# Use .NET 9 SDK to build the application
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copy everything into the container
COPY . .

# Publish the app to the /out folder
RUN dotnet publish -c Release -o /out

# Create a minimal container with .NET 9 runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app

# Copy the published app from the build step
COPY --from=build /out .

# Configure the app to run on port 80
ENV ASPNETCORE_URLS=http://+:80
EXPOSE 80

# Start the Umbraco app
ENTRYPOINT ["dotnet", "MyUmbracoSite.dll"]
