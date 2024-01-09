// Write all the code here

import React from "react";

const OrderDetailPage = () => {
  // Sample data for demonstration
  const orderDetails = {
    orderId: "#123456",
    status: "Delivered",
    placedAt: "2023-01-01 10:30 AM",
    deliveredAt: "2023-01-05 02:45 PM",
    paymentMethod: "COD",
    paymentReference: "1234-5678-9101-1121",
    paidAt: "2023-01-02 01:15 PM",
  };

  return (
    <div className="order-details">
      <h1>Status</h1>
      
      {/* Status Section */}
      <div className="status-section">
        <h2>Order Status</h2>
        <p>Order ID: {orderDetails.orderId}</p>
        <p>Status: {orderDetails.status}</p>
        <p>Placed at: {orderDetails.placedAt}</p>
        <p>Delivered at: {orderDetails.deliveredAt}</p>
      </div>

      {/* Payment Section */}
      <div className="payment-section">
        <h2>Payment Details</h2>
        <p>Payment Method: {orderDetails.paymentMethod}</p>
        <p>Payment Reference: {orderDetails.paymentReference}</p>
        <p>Paid at: {orderDetails.paidAt}</p>
      </div>
    </div>
  );
};

export default OrderDetailPage;
