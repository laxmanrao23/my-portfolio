// Program.cs - Register ContactFormService
using System.Net;
using ContactAPI.Models;
using ContactAPI.Services;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(options =>
{
    options.Listen(IPAddress.Any, 5000); // HTTP
    options.Listen(IPAddress.Any, 5001, listenOptions =>
    {
        listenOptions.UseHttps();
    }); // HTTPS
});

//Allow CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost3000", policy =>
    {
        policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod();
    });
});
// Add services to the container.
builder.Services.Configure<MongoDBSettings>(
    builder.Configuration.GetSection("MongoDBSettings"));
builder.Services.AddSingleton<ContactFormService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//Use CORS policy
app.UseCors ("AllowLocalhost3000");

app.UseAuthorization();

app.MapControllers();

app.Run();
