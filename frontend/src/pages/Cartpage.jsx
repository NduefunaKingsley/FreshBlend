import { useCart } from '../components/cart/CartContext';


const CartPage = () => {
  const { cart } = useCart(); // get the current cart items

  return (
    <div className="container py-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price} x {item.qty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
