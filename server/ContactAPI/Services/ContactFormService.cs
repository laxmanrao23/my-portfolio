// Services/ContactFormService.cs
using ContactAPI.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ContactAPI.Services
{
    public class ContactFormService
    {
        private readonly IMongoCollection<ContactForm> _contactCollection;

        public ContactFormService(IOptions<MongoDBSettings> mongoSettings)
        {
            var mongoClient = new MongoClient(mongoSettings.Value.ConnectionString);
            var mongoDatabase = mongoClient.GetDatabase(mongoSettings.Value.DatabaseName);
            _contactCollection = mongoDatabase.GetCollection<ContactForm>(mongoSettings.Value.ContactCollectionName);
        }

        public async Task<List<ContactForm>> GetAsync() =>
            await _contactCollection.Find(_ => true).ToListAsync();

        public async Task CreateAsync(ContactForm contactForm) =>
            await _contactCollection.InsertOneAsync(contactForm);
    }
}