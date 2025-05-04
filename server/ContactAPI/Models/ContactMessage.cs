namespace ContactAPI.Models
{
    public class ContactMessage
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }

        // Constructor to initialize Name, Email, Message, and Id
        public ContactMessage(string name, string email, string message, string id)
        {
            Id = id ?? throw new ArgumentNullException(nameof(id)); // Ensure Id is not null
            Name = name ?? throw new ArgumentNullException(nameof(name)); // Ensure Name is not null
            Email = email ?? throw new ArgumentNullException(nameof(email)); // Ensure Email is not null
            Message = message ?? throw new ArgumentNullException(nameof(message)); // Ensure Message is not null
        }
    }
}
