import './Story.css'
import Leaf from '../assets/images/Leaf.svg'
import Tag from '../assets/images/Tag.svg'

export default function HeroStory() {
  return (
    <div className="story-hero text-white mt-5 pt-5">
  <div className="story-heading text-center">
    <div className="story-header d-inline-flex align-items-center gap-2 border border-success bg-success bg-opacity-25 rounded-pill px-3 py-1">
      <img src={Leaf} className="story-header-icon" />
      <h6 className="m-0">About Our Story</h6>
    </div>

    <p className="story-text mt-4 text-secondary">
      From farm-fresh ingredients to your glass, we're passionate about creating
      <br /> the perfect blend of taste, nutrition, and sustainability.
    </p>
  </div>

  <div className="container journey-container mt-5">
    <div className="row justify-content-center align-items-center g-5">
      {/* LEFT SECTION */}
      <div className="col-lg-6">
        <h1 className="journey-header display-4">Our Journey Began in 2018</h1>

        <p className="journey-text text-secondary">
          What started as a small family business with a simple mission <br />
          has grown into a community of health enthusiasts. We believe <br />
          that great taste and nutrition shouldn't be compromised.
        </p>
        <p className="journey-text text-secondary">
          Every smoothie we craft tells a story of carefully selected <br />
          organic fruits, sustainable farming practices, and our <br />
          commitment to your wellness journey.
        </p>

        {/* RATINGS */}
        <div className="rating d-flex justify-content-between mt-4 py-4">
          <div className="text-center">
            <h1 className="rate-head1 text-warning">50K+</h1>
            <p className="rate-text text-secondary">Happy Customers</p>
          </div>

          <div className="text-center">
            <h1 className="rate-head2 text-info">100%</h1>
            <p className="rate-text text-secondary">Organic Fruits</p>
          </div>

          <div className="text-center">
            <h1 className="rate-head3" style={{ color: "magenta" }}>25+</h1>
            <p className="rate-text text-secondary">Unique Recipes</p>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION IMAGE */}
      <div className="col-lg-6">
        <div
          className="j-image-container position-relative rounded-4 border"
          style={{
            height: "31rem",
            backgroundImage: `linear-gradient(to left, rgba(20,20,20,0.4), rgba(5,5,5,0.86)), url('../assets/images/Story.svg')`,
            backgroundSize: "cover",
          }}
        ></div>

        <img
          src={Tag}
          className="tag-icon position-absolute"
          style={{ top: "26rem", left: "32rem" }}
        />
      </div>
    </div>
  </div>
</div>

  )
}
