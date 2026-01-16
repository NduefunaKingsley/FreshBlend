import { CartProvider } from './components/cart/CartContext';
import AppRouter from './router/AppRouter'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  return (
    <div>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </div>
  )
}
