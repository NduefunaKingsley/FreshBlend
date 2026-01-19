import React from "react";
import { useCart } from "./CartContext";
import { Container, Table, Button } from "react-bootstrap";
import "./Cart.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <Container className="py-5">
      <h2 className="text-white mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p className="text-secondary">Your cart is empty!☹️.</p>
        </div>
      ) : (
        <>
          <Table bordered hover responsive variant="dark" className="cart-table">
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
            <Button variant="success" size="lg" className="checkout-btn mt-3">
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
