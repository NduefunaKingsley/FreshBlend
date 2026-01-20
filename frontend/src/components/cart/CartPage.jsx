import React, { useState } from "react";
import { useCart } from "./CartContext";
import { Container, Table, Button, Modal } from "react-bootstrap";
import "./Cart.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleProceedToPayment = () => {
    setShowPayment(true);
    setPaymentSuccess(false);
  };

  const handleCompletePayment = () => {
    setPaymentProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      // Auto-close after 3 seconds and clear cart
      setTimeout(() => {
        setShowPayment(false);
        setPaymentSuccess(false);
        clearCart();
      }, 3000);
    }, 2000);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Container className="py-5">
      <h2 className="text-white mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart1 p-4 rounded">
          <p className="text-secondary text-center">Your cart is empty☹️.</p>
        </div>
      ) : (
        <>
          <Table  hover responsive variant="dark" className="cart-table1">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart-item-row">
                  <td className="item-name">{item.title}</td>
                  <td className="item-price">${item.price.toFixed(2)}</td>

                  <td className="qty-controls">
                    <div className="d-flex align-items-center gap-2 justify-content-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.qty - 1)
                        }
                      >
                        −
                      </Button>

                      <span className="qty-value">{item.qty}</span>

                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.qty + 1)
                        }
                      >
                        +
                      </Button>
                    </div>
                  </td>

                  <td className="subtotal">${(item.price * item.qty).toFixed(2)}</td>

                  <td className="action-btn">
                    <Button
                      variant="danger"
                      size="sm"
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕ Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="cart-total text-end text-white mt-4">
            <h4>Total: <span className="total-amount">${total.toFixed(2)}</span></h4>
            <Button 
              variant="success" 
              size="lg" 
              className="checkout-btn mt-3"
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </Button>
          </div>

          {/* Momo Payment Modal */}
          <Modal show={showPayment} onHide={() => !paymentProcessing && setShowPayment(false)} centered backdrop="static">
            <Modal.Header closeButton={!paymentProcessing} className="bg-dark border-secondary">
              <Modal.Title className="text-white">
                💳 Momo Payment
              </Modal.Title>
            </Modal.Header>

            <Modal.Body className="bg-dark text-white">
              {!paymentSuccess ? (
                <div className="momo-payment-form">
                  <div className="momo-header text-center mb-4">
                    <div className="momo-logo" style={{ fontSize: "3rem", marginBottom: "10px" }}>📱</div>
                    <h5>Mobile Money Payment</h5>
                  </div>

                  <div className="payment-details mb-4 p-3" style={{ backgroundColor: "#1a1a1a", borderRadius: "8px" }}>
                    <div className="d-flex justify-content-between mb-2">
                      <span>Amount:</span>
                      <strong style={{ color: "#28a745" }}>${total.toFixed(2)}</strong>
                    </div>
                    <hr className="border-secondary" />
                    <div className="d-flex justify-content-between">
                      <span>Items:</span>
                      <strong>{cart.length}</strong>
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="phoneNumber" className="mb-2">Phone Number</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="phoneNumber"
                      placeholder="0712345678"
                      style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444" }}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label htmlFor="pin" className="mb-2">PIN (4 digits)</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      id="pin"
                      placeholder="••••"
                      maxLength="4"
                      style={{ backgroundColor: "#2a2a2a", color: "#fff", border: "1px solid #444" }}
                    />
                  </div>

                  <div className="alert alert-info" role="alert">
                    <small>💡 <strong>Demo Mode:</strong> Enter any phone & PIN to complete payment</small>
                  </div>

                  <div className="d-grid gap-2">
                    <Button 
                      variant="success" 
                      size="lg"
                      onClick={handleCompletePayment}
                      disabled={paymentProcessing}
                    >
                      {paymentProcessing ? (
                        <>
                          <span 
                            className="spinner-border spinner-border-sm me-2" 
                            role="status" 
                            aria-hidden="true"
                          ></span>
                          Processing...
                        </>
                      ) : (
                        "Pay ${amount}".replace("${amount}", total.toFixed(2))
                      )}
                    </Button>
                    <Button 
                      variant="outline-secondary"
                      onClick={() => setShowPayment(false)}
                      disabled={paymentProcessing}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="payment-success text-center">
                  <div style={{ fontSize: "4rem", marginBottom: "20px" }}>✅</div>
                  <h5 className="mb-3">Payment Successful!</h5>
                  <p className="text-success mb-2">
                    <strong>Amount: ${total.toFixed(2)}</strong>
                  </p>
                  <p className="text-secondary">
                    <small>Transaction ID: TXN-{Date.now().toString().slice(-8)}</small>
                  </p>
                  <p className="text-secondary mt-3">
                    <small>Closing in a moment...</small>
                  </p>
                </div>
              )}
            </Modal.Body>
          </Modal>
        </>
      )}
    </Container>
  );
}
