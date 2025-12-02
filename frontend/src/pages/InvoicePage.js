import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from 'jspdf';
import autotable from 'jspdf-autotable';
import "../styles/InvoicePage.css";

export default function InvoicePage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { cartItems, shippingDetails, totalPrice } = state || {};

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("KisanKart Invoice", 14, 20);

    doc.setFontSize(12);
    doc.text(`Customer Name: ${shippingDetails?.name}`, 14, 40);
    doc.text(`Address: ${shippingDetails?.address}`, 14, 48);
    doc.text(`Mobile: ${shippingDetails?.mobile}`, 14, 56);
    doc.text(`Payment Method: ${shippingDetails?.paymentMethod}`, 14, 64);

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

    autotable(doc, {
      head: [["#", "Product", "Qty", "Price/unit", "Total"]],
      body: tableRows,
      startY: 80,
      theme: 'grid',
      headStyles: { fillColor: [33, 47, 61], textColor: 255, fontSize: 12, fontStyle: 'bold' },
      bodyStyles: { fontSize: 12, textColor: 50 },
      alternateRowStyles: { fillColor: [240, 240, 240] },
    });

    doc.setFontSize(14);
    doc.text(`Total Amount: ₹${totalPrice}`, 14, doc.lastAutoTable.finalY + 20);

    doc.save('KisanKart_Invoice.pdf');
  };

  return (
    <div className="invoice-container">
      <h2>Order Invoice 📄</h2>

      {cartItems && cartItems.length > 0 ? (
        <div className="invoice-content">
          <div className="invoice-header">
            <h3>KisanKart Invoice</h3>
            <p>Customer: {shippingDetails?.name}</p>
            <p>Address: {shippingDetails?.address}</p>
            <p>Mobile: {shippingDetails?.mobile}</p>
            <p>Payment: {shippingDetails?.paymentMethod}</p>
          </div>

          <table className="invoice-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price/Unit</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
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

          <div className="invoice-footer">
            <h4>Total Amount: ₹{totalPrice}</h4>
            <button className="btn btn-primary" onClick={generatePDF}>Download Invoice (PDF)</button>
            <button className="btn btn-secondary" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>
      ) : (
        <p>No invoice data available.</p>
      )}
    </div>
  );
}
