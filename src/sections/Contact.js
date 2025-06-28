import React, { useState } from "react";
import gitHubImage from '../assests/icons8-github.svg';
import linkedInImage from '../assests/icons8-linkedin.svg';
import xImage from '../assests/icons8-x.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full name must contain only letters and spaces';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ssmi0cl36rv3c", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      const result = await response.json();
      console.log("SheetDB Response:", result);

      const emailResult = await emailjs.send(
        "service_h53316u",
        "template_7od9o5j",
        {
          fullName: formData.fullName,
          email: formData.email,
          message: formData.message,
        },
        "avAH9WO4ooYnWdNqP"
      );

      console.log("EmailJS Response:", emailResult);
      alert("Message sent successfully!");

      setFormData({ fullName: "", email: "", message: "" });

    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Reach Out</h1>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Feel free to reach out to me!</p>
          <p className="text-lg font-semibold">Email: laxmanrao.savirigapu@gmail.com</p>
          <p className="text-lg font-semibold">Phone: +91 6302951105</p>
          <p className="text-lg font-semibold">Location: Hyderabad, India 🇮🇳</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://github.com/laxmanrao23" target="_blank" rel="noopener noreferrer"><img src={gitHubImage} alt="GitHub" className="w-12 h-12" /></a>
            <a href="https://www.linkedin.com/in/laxman-rao-s/" target="_blank" rel="noopener noreferrer"><img src={linkedInImage} alt="LinkedIn" className="w-12 h-12" /></a>
            <a href="https://x.com/LSavirigap95703" target="_blank" rel="noopener noreferrer"><img src={xImage} alt="X" className="w-12 h-12" /></a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div>
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm" />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full p-3 border rounded-2xl bg-white dark:bg-gray-700 text-black dark:text-white h-32 shadow-sm" />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          <button type="submit" disabled={isLoading} className="w-full p-3 bg-blue-500 dark:bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-600 dark:hover:bg-blue-700 transition">
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
