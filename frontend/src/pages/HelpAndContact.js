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
    alert('Thank you! Your message has been sent. We\'ll get back to you shortly.');
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
          className="w-full px-4 py-2 border border-gray-300 rounded"
          placeholder="Your name"
          required
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
          className="w-full px-4 py-2 border border-gray-300 rounded"
          placeholder="your@email.com"
          required
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
          className="w-full px-4 py-2 border border-gray-300 rounded"
          placeholder="Your message here..."
          rows="5"
          required
        />
      </div>

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700">
        Send Message
      </button>
    </form>
  );
};

const HelpAndContact = () => {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "You can create an account by clicking 'Register' on the homepage and filling in the required information as a Farmer or Consumer."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Cash on Delivery, UPI Payment, and Credit/Debit Cards."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-5 business days depending on your location."
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 24 hours of placement. Contact our support team for assistance."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we use industry-standard encryption to protect your personal and payment information."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-green-700">Help & Support</h1>
        <p className="text-center text-gray-600 mb-12">Find answers to common questions and get in touch with us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Frequently Asked Questions</h2>
            <div>
              {faqs.map((faq, idx) => (
                <FaqItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6 text-green-700">Get In Touch</h2>
            <ContactForm />
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
              <p className="mb-2">📧 Email: support@kisankart.com</p>
              <p className="mb-2">📞 Phone: +91-1234-567-890</p>
              <p>🕐 Available: Mon-Fri, 10 AM - 6 PM IST</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndContact;
