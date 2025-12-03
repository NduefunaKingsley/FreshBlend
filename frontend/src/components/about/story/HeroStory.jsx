import './Story.css'
import Leaf from '../assets/images/Leaf.svg'
import Tag from '../assets/images/Tag.svg'

export default function HeroStory() {
  return (
    <div>
        <div className='story-hero'>
            <div className='story-heading'>
                <div className='story-header'>
                    <img src={Leaf} className='story-header-icon' />
                    <h3 className='story-head'>About Our Story</h3>
                </div>
                <p className='story-text'>
                    From farm-fresh ingredients to your glass, we're passionate about creating <br /> the perfect blend of taste, nutrition, and sustainability.
                </p>
            </div>
            <div className='journey-container'>
                <div className='journey j-tab'>
                    <h1 className='journey-header'>Our Journey Began in 2018</h1>
                    <p className='journey-text'>What started as a small family business with a simple mission <br/> has grown into a community of health enthusiasts. We believe <br /> that great taste and nutrition shouldn't be compromised.</p><br />
                    <p className='journey-text'>Every smoothie we craft tells a story of carefully selected <br/> organic fruits, sustainable farming practices, and our <br /> commitment to your wellness journey.</p>
                    <div className='rating'>
                        <div className='customers rate'>
                            <h1 className='rate-head1'>50K+</h1>
                            <p className='rate-text'>Happy Customers</p>
                        </div>
                        <div className='organic rate'>
                            <h1 className='rate-head2'>100%</h1>
                            <p className='rate-text'>Organic Fruits</p>
                        </div>
                        <div className='recipies rate'>
                            <h1 className='rate-head3'>25+</h1>
                            <p className='rate-text'>Unique Recipies</p>
                        </div>
                    </div>
                </div>
                <div className='journey-img j-tab'>
                    <div className='j-image-container'>
                        <img src={Tag} className='tag-icon' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
