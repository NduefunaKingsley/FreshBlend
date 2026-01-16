import './Menu.css'
import Tab from '../../Tab';
import Tropical from './assets/images/Tropical.svg'
import Green from './assets/images/Green.svg'
import Berry from './assets/images/Berry.svg'
import Choco from './assets/images/Choco.svg'
import Peachy from './assets/images/Peachy.svg'
import Acai from './assets/images/Acai.svg'
import { useCart } from '../cart/CartContext';

export default function Products() {
  const { addToCart } = useCart();

  const smoothies = [
    { id: "1", image: Tropical, title: "Tropical Paradise", text: "Mango, Pineapple, coconut milk", price: 8.99 },
    { id: "2", image: Green, title: "Green Goddess", text: "Spinach, kale, green apple, banana", price: 8.99 },
    { id: "3", image: Berry, title: "Berry Blast", text: "Mixed berries, banana, yogurt", price: 8.99 },
    { id: "4", image: Choco, title: "Choco Power", text: "Chocolate, banana, protein", price: 8.99 },
    { id: "5", image: Peachy, title: "Peachy Keen", text: "Peach, orange, carrot, turmeric, coconut water", price: 8.99 },
    { id: "6", image: Acai, title: "Acai Energy", text: "Acai berries, blueberries, banana, granola, coconut", price: 8.99 },
  ];

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
          {smoothies.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 d-flex justify-content-center">
              <Tab
                id={item.id}
                image={item.image}
                title={item.title}
                text={item.text}
                price={`$${item.price}`}
                buttonText="Add to Cart"
                onButtonClick={() => addToCart({ id: item.id, title: item.title, price: item.price })}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
