// Controllers/ContactController.cs
using System.Drawing;
using ContactAPI.Models;
using ContactAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ContactAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        private readonly ContactFormService _contactService;

        public ContactController(ContactFormService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        public async Task<IActionResult> Post(ContactForm contact)
        {
            if (contact == null) return BadRequest ("invalid contact form");
            
            await _contactService.CreateAsync(contact);
            return Ok(new { message = "Message received successfully." });
        }

        [HttpGet]
        public async Task<ActionResult<List<ContactForm>>> get()
        {
            var message = await _contactService.GetAsync();
            return Ok(message);
        }
    }
}
