import './About.css'
import Ceo from './assets/images/Ceo.jpg'

export default function Team() {
  return (
    <div className="container my-5 text-white">
  <div className="text-center mb-5">
    <h1>Meet Our Passionate Team</h1>
  </div>
  <div className="row g-4 justify-content-center text-center">
    {/* Team Member */}
    <div className="col-12 col-sm-6 col-md-3">
      <img src={Ceo} alt="CEO" className="img-fluid rounded-circle border border-secondary mb-2" />
      <h4>Kingsley Kaycee</h4>
      <p className="text-warning">Founder & CEO</p>
    </div>

    <div className="col-12 col-sm-6 col-md-3">
      <img src={Ceo} alt="Assistant CEO" className="img-fluid rounded-circle border border-secondary mb-2" />
      <h4>Kaycee</h4>
      <p className="text-info">Assistant CEO</p>
    </div>

    <div className="col-12 col-sm-6 col-md-3">
      <img src={Ceo} alt="Head Chef" className="img-fluid rounded-circle border border-secondary mb-2" />
      <h4>Nduefuna</h4>
      <p className="text-violet">Head Chef</p>
    </div>

    <div className="col-12 col-sm-6 col-md-3">
      <img src={Ceo} alt="Assistant Chef" className="img-fluid rounded-circle border border-secondary mb-2" />
      <h4>Kay</h4>
      <p className="text-success">Assistant Chef</p>
    </div>
  </div>
</div>
  )
}
