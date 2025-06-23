// Program.cs - Register ContactFormService
using System.Net;
using ContactAPI.Models;
using ContactAPI.Services;

var builder = WebApplication.CreateBuilder(args);

// Configure HTTP and HTTPS ports
builder.WebHost.ConfigureKestrel(options =>
{
    options.Listen(IPAddress.Any, 5050); // HTTP
    options.Listen(IPAddress.Any, 5001, listenOptions =>
    {
        listenOptions.UseHttps();
    }); // HTTPS
});

// Allow CORS from React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Add MongoDB settings and services
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<ContactFormService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Swagger in development
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Apply correct CORS policy here
app.UseCors("AllowLocalhost3000");

app.UseAuthorization();

app.MapControllers();

app.Run();
