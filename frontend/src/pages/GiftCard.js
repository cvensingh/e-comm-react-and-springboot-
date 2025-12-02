import React, { useState } from 'react';

const GiftCard = () => {
  const [formData, setFormData] = useState({
    amount: '',
    recipientName: '',
    recipientContact: '',
    message: '',
    deliveryMethod: 'email'
  });

  const presetAmounts = [100, 250, 500, 1000];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gift card purchased successfully!");
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">Send a Gift Card</h1>
        <img
          src="/images/gift-card-banner.webp"
          alt="Gift Card"
          className="w-full rounded-lg mb-6"
        />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-semibold mb-2">Choose Amount</label>
            <div className="flex flex-wrap gap-2">
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className={`px-4 py-2 rounded border ${
                    formData.amount === amt.toString()
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-200'
                  }`}
                  onClick={() =>
                    setFormData({ ...formData, amount: amt.toString() })
                  }
                >
                  ₹{amt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Recipient Name</label>
            <input
              type="text"
              name="recipientName"
              value={formData.recipientName}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter recipient's name"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Recipient Contact</label>
            <input
              type="email"
              name="recipientContact"
              value={formData.recipientContact}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Enter recipient's email"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Add a personal message"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
          >
            Send Gift Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiftCard;
