import { useState, useEffect } from 'react'
import { CartProvider } from './components/cart/CartContext';
import Loader from './components/Loader'
import AppRouter from './router/AppRouter'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate app loading time (2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div>
      {isLoading && <Loader />}
      <CartProvider>
        <AppRouter />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </CartProvider>
    </div>
  )
}
