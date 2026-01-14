import './Menu.css'
import Tab from '../../Tab';
import Tropical from './assets/images/Tropical.svg'
import Green from './assets/images/Green.svg'
import Berry from './assets/images/Berry.svg'
import Choco from './assets/images/Choco.svg'
import Peachy from './assets/images/Peachy.svg'
import Acai from './assets/images/Acai.svg'

export default function Products() {
  return (
    <div className="container py-5">
  <section>
    {/* Header */}
    <div className="text-center mb-5">
      <h1 className="fw-bold text-white">
        Our <span className="text-success">Smoothie</span> Menu
      </h1>
      <p className="text-secondary">
        Discover our delicious range of fresh smoothies, made with the finest ingredients to
        <br />
        tantalize your taste buds and nourish your body.
      </p>
    </div>

    {/* Products */}
    <div className="row g-4 justify-content-center">
      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Tropical} title="Tropical Paradise" text="Mango, Pineapple, coconut milk" buttonText="Add to Cart" price="$8.99" />
      </div>

      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Green} title="Green Goddess" text="Spinach, kale, green apple, banana" buttonText="Add to Cart" price="$8.99" />
      </div>

      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Berry} title="Berry Blast" text="Mixed berries, banana, yogurt" buttonText="Add to Cart" price="$8.99" />
      </div>

      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Choco} title="Choco Power" text="Chocolate, banana, protein" buttonText="Add to Cart" price="$8.99" />
      </div>

      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Peachy} title="Peachy Keen" text="Peach, orange, carrot, turmeric, coconut water" buttonText="Add to Cart" price="$8.99" />
      </div>

      <div className="col-lg-4 col-md-6 d-flex justify-content-center">
        <Tab image={Acai} title="Acai Energy" text="Acai berries, blueberries, banana, granola, coconut" buttonText="Add to Cart" price="$8.99" />
      </div>
    </div>
  </section>
</div>

  )
}
