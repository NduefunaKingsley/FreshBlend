import './Story.css'
import Leaf from '../assets/images/Leaf.svg'
import Tag from '../assets/images/Tag.svg'

export default function HeroStory() {
  return (
    <div className="story-hero text-white mt-5 pt-5">
  {/* STORY HEADER */}
  <div className="text-center mb-5">
    <div className="d-inline-flex align-items-center gap-2 border border-success bg-success bg-opacity-25 rounded-pill px-3 py-1">
      <img src={Leaf} className="story-header-icon" alt="Leaf Icon" />
      <h6 className="m-0">About Our Story</h6>
    </div>
    <p className="story-text mt-4 text-secondary">
      From farm-fresh ingredients to your glass, we're passionate about creating<br />
      the perfect blend of taste, nutrition, and sustainability.
    </p>
  </div>

  {/* JOURNEY */}
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Left Content */}
      <div className="col-lg-6">
        <h1 className="display-4">Our Journey Began in 2018</h1>
        <p className="text-secondary mt-3">
          What started as a small family business with a simple mission <br />
          has grown into a community of health enthusiasts. We believe <br />
          that great taste and nutrition shouldn't be compromised.
        </p>
        <p className="text-secondary">
          Every smoothie we craft tells a story of carefully selected <br />
          organic fruits, sustainable farming practices, and our <br />
          commitment to your wellness journey.
        </p>

        {/* Ratings */}
        <div className="d-flex justify-content-between mt-4 py-4 text-center">
          <div>
            <h1 className="text-warning">50K+</h1>
            <p className="text-secondary">Happy Customers</p>
          </div>
          <div>
            <h1 className="text-info">100%</h1>
            <p className="text-secondary">Organic Fruits</p>
          </div>
          <div>
            <h1 style={{ color: 'magenta' }}>25+</h1>
            <p className="text-secondary">Unique Recipes</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="col-lg-6 position-relative">
        <div
          className="rounded-4 border j-image-container"
        ></div>
      </div>
    </div>
  </div>
</div>
  )
}
