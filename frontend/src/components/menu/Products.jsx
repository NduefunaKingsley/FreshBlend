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
    <div>
        <section className='menu-section'>
            <div className='menu-header'>
            <h1 className='menu-head'>Our <span className='span1'>Smoothie</span> Menu</h1>
            <p className='menu-text'>Discover our delicious range of fresh smoothies, made with the finest ingredients to<br /> tantalize your taste buds and nourish your body.</p>
        </div>
        <div className='products-container'>
            <Tab
                      image={Tropical}
                      title="Tropical Paradise"
                      text="Mango, Pineapple, coconut milk"
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />
            <Tab
                      image={Green}
                      title="Green Goddess"
                      text="Spinach, kale, green apple, banana"
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />'
            <Tab
                      image={Berry}
                      title="Berry Blast"
                      text="Mixed berries, banana, yogurt"
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />
            <Tab
                      image={Choco}
                      title="Choco Power"
                      text="Chocolate , banana, protein "
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />
            <Tab
                      image={Peachy}
                      title="Peachy Keen"
                      text="Peach, orange, carrot, tumeric, coconut water"
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />
            <Tab
                      image={Acai}
                      title="Acai Energy"
                      text="Acai berries, blue berries, banana, grancia, coconut"
                      buttonText="Add to Cart"
                      onButtonClick={() => alert("Opening Attack on Titan...")}
                      price={"$8.99"}
                    />
        </div>
        </section>
    </div>
  )
}
