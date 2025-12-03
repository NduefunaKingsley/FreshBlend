import { Link } from 'react-router';
import './Home.css'
import SlideInSection from './SlideInSection';

export default function HeroSection() {
  return (
    <SlideInSection direction="up" delay={1000}>
    <div>
  <section 
    id="hero"
    className="hero-section p-sm-5 d-flex align-items-center justify-content-between container-fluid"
  >
    <div className="hero-content text-white">
      <h1 className="display-1 fw-bold hero-head">
        Fresh <span className="text-success fw-bold custom-green">Smoothies</span> Made <br />
        to <span className="text-warning fw-bold span2">Order</span>
      </h1>

      <p className="lead hero-texts">
        Book your favorite fruit smoothie online and pick it up fresh.<br /> 
        Made with premium ingredients, ready when you are.
      </p>

      <Link to="/menu" className="btn btn-success order-now-btn px-4 py-3 fw-bold">
        Order Now
      </Link>
    </div>
  </section>
</div>

    </SlideInSection>
    
  )
}
