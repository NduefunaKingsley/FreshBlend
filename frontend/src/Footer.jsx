import { Link } from 'react-router-dom'
import Logo from './assets/images/navbar/Logo.svg'
import Icon1 from './assets/images/footer/Icon1.svg'
import Icon2 from './assets/images/footer/Icon2.svg'
import Icon3 from './assets/images/footer/Icon3.svg'

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
  <div className="container">
    <div className="row text-start gy-4">

      {/* Logo + Description */}
      <div className="col-12 col-md-6 col-lg-3">
        <div className="d-flex align-items-center mb-3">
          <img src={Logo} alt="Logo" className="me-2" style={{ width: "50px", height: "50px" }} />
          <h4 className="m-0 text-white">Fresh Blend</h4>
        </div>
        <p className="text-secondary">
          Fresh smoothies made to order with premium ingredients.
        </p>
      </div>

      {/* Quick Links */}
      <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white mb-3">Quick Links</h5>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">Menu</Link>
        </p>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">About</Link>
        </p>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">Contacts</Link>
        </p>
      </div>

      {/* Support */}
      <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white mb-3">Support</h5>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">Contact Us</Link>
        </p>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">FAQ</Link>
        </p>
        <p className="mb-1">
          <Link to="#" className="text-secondary text-decoration-none">Terms & Conditions</Link>
        </p>
      </div>

      {/* Social Icons */}
      <div className="col-12 col-md-6 col-lg-3">
        <h5 className="text-white mb-3">Follow Us</h5>
        <div className="d-flex gap-3">
          <img src={Icon1} alt="" className="social-icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
          <img src={Icon2} alt="" className="social-icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
          <img src={Icon3} alt="" className="social-icon" style={{ width: "30px", height: "30px", cursor: "pointer" }} />
        </div>
      </div>

    </div>

    <hr className="border-secondary my-4" />

    <p className="text-center text-secondary">
      © 2024 FreshBlend. All rights reserved.
    </p>
  </div>
</footer>
<<<<<<< HEAD

=======
>>>>>>> homepage
  )
}
