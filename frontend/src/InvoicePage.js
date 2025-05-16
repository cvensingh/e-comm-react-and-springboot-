import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';
import "./InvoicePage.css";

export default function InvoicePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { cartItems, shippingDetails, totalPrice } = state || {};

  const generatePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("KisanKart Invoice", 14, 20);

    // Customer Details
    doc.setFontSize(12);
    doc.text(`Customer Name: ${shippingDetails?.name}`, 14, 40);
    doc.text(`Address: ${shippingDetails?.address}`, 14, 48);
    doc.text(`Mobile: ${shippingDetails?.mobile}`, 14, 56);
    doc.text(`Payment Method: ${shippingDetails?.paymentMethod}`, 14, 64);

    // Table: Product details
    const tableColumn = ["#", "Product", "Quantity", "Price/Unit", "Total"];
    const tableRows = [];

    cartItems?.forEach((item, index) => {
      const rowData = [
        index + 1,
        item.title,
        item.quantity,
        `₹${item.price}`,
        `₹${item.price * item.quantity}`,
      ];
      tableRows.push(rowData);
    });
    // 👇 Now use autoTable
    autotable(doc, {
      head: [["#", "Product", "Qty", "Price/unit", "Total"]],
      body: tableRows,
      startY: 80,
      theme: 'grid',  // Updated for cleaner grid style
      headStyles: { fillColor: [33, 47, 61], textColor: 255, fontSize: 12, fontStyle: 'bold' },
      bodyStyles: { fontSize: 12, textColor: 50 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    const finalY = doc.lastAutoTable.finalY || 90;

    // Total price
    doc.setFontSize(14);
    doc.text(`Total Amount: ₹${totalPrice}`, 14, finalY + 10);

    doc.save("Invoice_KisanKart.pdf");
  };

  return (
    <div className="invoice-container">
      <div className="invoice-box">
        <div className="invoice-header">
          <h2>KisanKart Invoice</h2>
          <div className="invoice-logo">
            <img src="./images/kisankartLogo.png" alt="KisanKart Logo" />
          </div>
        </div>
        <hr />

        <div className="customer-details">
          <div className="customer-detail">
            <p><strong>Customer Name:</strong> {shippingDetails?.name}</p>
            <p><strong>Address:</strong> {shippingDetails?.address}</p>
            <p><strong>Mobile:</strong> {shippingDetails?.mobile}</p>
            <p><strong>Payment Method:</strong> {shippingDetails?.paymentMethod}</p>
          </div>
        </div>

        <hr />

        <h4>Order Summary</h4>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Price/unit</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>{item.quantity}</td>
                <td>₹{item.price}</td>
                <td>₹{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="total-section">
          <h5>Total Price: ₹{totalPrice}</h5>
        </div>

        <div className="buttons">
          <button className="btn btn-primary" onClick={generatePDF}>
            Download Invoice
          </button>
          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
