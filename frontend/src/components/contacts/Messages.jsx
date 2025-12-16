import Location from './assets/images/Location.svg'
import Call from './assets/images/Call.svg'
import Email from './assets/images/Email.svg'

export default function Messages() {
  return (
    <div className="container py-5 text-white">
      {/* HEADER */}
      <div className="text-center mb-5">
        <h1 className="text-warning fw-bold" style={{ textShadow: "0 0 20px orange" }}>
          Get In Touch
        </h1>
        <p className="text-secondary fs-5">
          Have questions about our fresh smoothies? Want to place a bulk<br />
          order? We'd love to hear from you!
        </p>
      </div>

      <div className="row g-4">
        {/* LEFT — CONTACT CARDS */}
        <div className="col-12 col-lg-6">
          {/* CARD 1 */}
          <div className="p-4 mb-4 rounded-4 bg-dark bg-opacity-50 border border-secondary">
            <div className="d-flex align-items-center gap-3">
              <img src={Location} className="rounded-circle" width="60" />
              <div>
                <h3 className="m-0">Visit Our Store</h3>
                <p className="text-secondary m-0">Fresh smoothies made daily</p>
              </div>
            </div>
            <p className="text-secondary mt-3 fs-5">
              123 Smoothie Street <br />
              Fresh Valley, CA902110 <br />
              Accra, Ghana
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-4 mb-4 rounded-4 bg-dark bg-opacity-50 border border-secondary">
            <div className="d-flex align-items-center gap-3">
              <img src={Call} className="rounded-circle" width="60" />
              <div>
                <h3 className="m-0">Call Us</h3>
                <p className="text-secondary m-0">Monday - Friday</p>
              </div>
            </div>
            <p className="text-secondary mt-3 fs-5">
              (+233) 2093 - 03341 <br />
              (+233) 5510 - 06413
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary">
            <div className="d-flex align-items-center gap-3">
              <img src={Email} className="rounded-circle" width="60" />
              <div>
                <h3 className="m-0">Email Us</h3>
                <p className="text-secondary m-0">Quick responses guaranteed</p>
              </div>
            </div>
            <p className="text-secondary mt-3 fs-5">
              freshblend25@gmail.com <br />
              kingsleykaycee19@gmail.com
            </p>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="col-12 col-lg-6">
          <div className="p-4 rounded-4 border border-secondary">
            <h2 className="mb-4">Send Us A Message</h2>
            <form>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="e.g: John" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control bg-dark text-white border-secondary" placeholder="e.g: Doe" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control bg-dark text-white border-secondary" placeholder="example@gmail.com" />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-control bg-dark text-white border-secondary" placeholder="+233 20 903 341" />
                </div>
                <div className="col-12">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-control bg-dark text-white border-secondary" rows="5" placeholder="Type your message here..."></textarea>
                </div>
                <div className="col-12 mt-3">
                  <button type='submit' className="btn w-100 py-3 rounded-pill" style={{ background: "#03fa03", color: "black", fontWeight: "600" }}>
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
