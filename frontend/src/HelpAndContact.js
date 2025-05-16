import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between w-full text-left text-lg font-medium text-gray-800 hover:text-green-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! Your message has been sent. We’ll get back to you shortly.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-600 focus:ring-green-600"
        ></textarea>
      </div>
      <button
        type="submit"
        className= " bg-white-500 text-black py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300"

      >
        Send Message
      </button>
    </form>
  );
};

const HelpAndContact = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking link via SMS and email to monitor delivery status."
    },
    {
      question: "How do I add products on KisanKart?",
      answer: "Log in to your farmer dashboard and use the 'Add Product' feature by filling in the required details."
    },
    {
      question: "What should I do if I face a payment issue?",
      answer: "Please contact our support team using the form below, and we’ll assist you as soon as possible."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-700 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold">KisanKart Help & Contact</h1>
          <p className="mt-1 text-sm text-gray-200">
            We're here to assist you with any questions or issues.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* Contact Form Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 KisanKart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HelpAndContact;
