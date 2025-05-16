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
    // Add API call logic here
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
              <input
                type="number"
                name="amount"
                placeholder="Custom"
                value={formData.amount}
                onChange={handleChange}
                className="ml-2 px-4 py-2 border rounded w-32"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Recipient Name</label>
            <input
              type="text"
              name="recipientName"
              required
              value={formData.recipientName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Recipient Email or Mobile</label>
            <input
              type="text"
              name="recipientContact"
              required
              value={formData.recipientContact}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Personal Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              className="w-full border px-4 py-2 rounded"
              placeholder="Write your message..."
            ></textarea>
          </div>

          <div>
            <label className="block font-semibold mb-1">Delivery Method</label>
            <select
              name="deliveryMethod"
              value={formData.deliveryMethod}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            >
              <option value="email">Email</option>
              <option value="sms">SMS</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-Black font-bold py-3 rounded-lg transition"
          >
            Purchase Gift Card
          </button>

          <p className="text-sm text-center text-gray-500 mt-2">
            By purchasing, you agree to our <a href="#" className="underline">Terms & Conditions</a>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default GiftCard;
