using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ContactAPI.Models
{
    public class ContactForm
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("name")]
    public string? Name { get; set; }

    [BsonElement("email")]
    public string? Email { get; set; }

    [BsonElement("message")]
    public string? Message { get; set; }

    public ContactForm() { }

    public ContactForm(string name, string email, string message)
    {
        Name = name ?? throw new ArgumentNullException(nameof(name));
        Email = email ?? throw new ArgumentNullException(nameof(email));
        Message = message ?? throw new ArgumentNullException(nameof(message));
    }
}

}
