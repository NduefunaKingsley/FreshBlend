import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import NavScrollExample from '../Navbar'
import Homepage from '../pages/Homepage'
import Menupage from '../pages/Menupage'
import Aboutpage from '../pages/Aboutpage'
import Contactpage from '../pages/Contactpage'
import Cartpage from '../pages/Cartpage'
import SignInpage from '../pages/SignInpage'
import SignUppage from '../pages/SignUppage'
import Footer from '../Footer'

function AppContent() {
  const location = useLocation();
  const hideNavFooter = location.pathname === '/signin' || location.pathname === '/signup';

  return (
    <>
      {!hideNavFooter && <NavScrollExample />}
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/menu' element={<Menupage />}/>
        <Route path='/about' element={<Aboutpage />}/>
        <Route path='/contact' element={<Contactpage />}/>
        <Route path='/cart' element={<Cartpage />}/>
        <Route path='/signin' element={<SignInpage />}/>
        <Route path='/signup' element={<SignUppage />}/>
      </Routes>
      {!hideNavFooter && <Footer />}
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
