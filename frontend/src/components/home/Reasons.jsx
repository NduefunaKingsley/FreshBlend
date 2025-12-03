import './Home.css'
import Fresh from '../home/assets/images/reasons/Fresh.svg'
import Time from '../home/assets/images/reasons/Time.svg'
import Customize from '../home/assets/images/reasons/Customize.svg'
import SlideInSection from '../home/SlideInSection'

export default function Reasons() {
  return (
    <SlideInSection direction="up" delay={1000}>
    <div>
  <section id="reasons" className="reasons-section py-5 w-100 justify-content-center align-items-center d-flex flex-column">

    {/* Header */}
    <div className="text-center mb-5 section-header ">
      <h2 className="fw-bold section-head">Why Choose FreshBlend?</h2>
      <p className="text-white-50 section-text">
        Experience the convenience of pre-ordering your perfect smoothie
      </p>
    </div>

    {/* Card Row */}
    <div className="row g-4 reasons-card-container">

      {/* Card 1 */}
      <div className="col-12 col-md-6 col-lg-4 h-10
      ">
        <div className="reason-card fresh h-100">
          <img src={Fresh} className="card-icon mb-3" alt="Fresh" />
          <h3 className="card-head">Fresh Ingredients</h3>
          <p className="card-text">
            We use only the freshest fruits and premium ingredients to craft delicious smoothies.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="reason-card time h-100">
          <img src={Time} className="card-icon mb-3" alt="Time" />
          <h3 className="card-head">Quick Pickup</h3>
          <p className="card-text">
            Order ahead and skip the wait. Your smoothie will be ready for pickup at your chosen time.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-12 col-md-6 col-lg-4">
        <div className="reason-card customize h-100">
          <img src={Customize} className="card-icon mb-3" alt="Customize" />
          <h3 className="card-head">Customization</h3>
          <p className="card-text">
            Create your perfect blend with our customization options, add-ons adn many more.
          </p>
        </div>
      </div>

    </div>

  </section>
</div>

    </SlideInSection>
  )
}
