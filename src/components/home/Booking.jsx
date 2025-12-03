import './Home.css'

export default function Booking() {
  return (
    <div>
  <section className="booking-section" id="booking">
    <div className="text-center text-white mb-5 section-header">
      <h1 className="fw-bold">Book Your Smoothie</h1>
      <p>Choose your location and preferred pickup time</p>
    </div>

    <div className="container">
      <div className="booking-tab mx-auto p-4 rounded-4 border border-secondary w-100">
        
        <div className="row g-4 booking-inputs">
          {/* LEFT SIDE */}
          <div className="col-12 col-md-6">
            
            <div className="mb-4 form">
              <label className="text-white mb-2">Location</label>
              <input
                type="text"
                list="commonLocations"
                placeholder="Please enter your location"
                className="form-control bg-dark text-light rounded-pill py-2 input border border-secondary"
                required
              />
              <datalist id="commonLocations">
                <option value="East Legon" />
                <option value="Nungua" />
                <option value="Madina" />
                <option value="Circle" />
                <option value="Trasacco" />
                <option value="Teshie" />
                <option value="Airport City" />
                <option value="Spintex" />
                <option value="Osu" />
                <option value="Adenta" />
                <option value="Tsado" />
              </datalist>
            </div>

            <div className="mb-4 form pickup">
              <label className="text-white mb-2">Pickup Time</label>
              <input
                type="time"
                className="form-control bg-dark text-light rounded-pill py-2 input border border-secondary"
                required
              />
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-12 col-md-6">

            <div className="mb-4 form">
              <label className="text-white mb-2">Pickup Date</label>
              <input
                type="date"
                className="form-control bg-dark text-light rounded-pill py-2 input border border-secondary"
                required
              />
            </div>

            <div className="mb-4 form tel">
              <label className="text-white mb-2">Phone Number</label>
              <input
                type="tel"
                placeholder="+233 - 5510 - 6413"
                className="form-control bg-dark text-light rounded-pill py-2 input border border-secondary"
                required
              />
            </div>

          </div>
        </div>

        {/* BUTTON */}
        <div className="text-center mt-2">
          <button className="confirm-booking-btn">
            Confirm Booking
          </button>
        </div>

      </div>
    </div>

  </section>
</div>

  )
}
