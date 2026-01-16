import './Home.css'
import Tab from '../../Tab'
import { useNavigate } from 'react-router-dom'
import Tropical from './assets/images/menu/Tropical.svg'
import Berry from './assets/images/menu/Berry.svg'
import Green from './assets/images/menu/Green.svg'
import Choco from './assets/images/menu/Choco.svg'

export default function Smoothies() {
  const navigate = useNavigate()
  return (
    <div className="smoothie-container p-sm-5">
  <section id="smoothies">
    <div className="text-center mb-5 section-header">
      <h2 className="fw-bold text-white section-head">Popular Smoothies</h2>
      <p className="text-light">Discover our most loved and healthy combinations</p>
    </div>

    <div className="row g-4 justify-content-center smoothie-card-container">
      <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
        <Tab
          image={Tropical}
          title="Tropical Paradise"
          text="Mango, Pineapple, coconut milk"
          buttonText="Add to Cart"
          onButtonClick={() => navigate('/menu')}
          price={"$8.99"}
        />
      </div>

      <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
        <Tab
          image={Berry}
          title="Berry Blast"
          text="Mixed berries, banana, yogurt"
          buttonText="Add to Cart"
          onButtonClick={() => navigate('/menu')}
          price={"$10.99"}
        />
      </div>

      <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
        <Tab
          image={Green}
          title="Green Goddess"
          text="Spinach, kale, green apple, banana"
          buttonText="Add to Cart"
          onButtonClick={() => navigate('/menu')}
          price={"$6.99"}
        />
      </div>

      <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
        <Tab
          image={Choco}
          title="Choco Power"
          text="Chocolate , banana, protein "
          buttonText="Add to Cart"
          onButtonClick={() => navigate('/menu')}
          price={"$12.99"}
        />
      </div>
    </div>
  </section>
</div>

  )
}
