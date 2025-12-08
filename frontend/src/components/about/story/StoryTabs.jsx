import './Story.css'
import Nature from '../assets/images/Nature.svg'
import Heart from '../assets/images/Heart.svg'
import Recycle from '../assets/images/Recycle.svg'

export default function StoryTabs() {
  return (
    <div className="container my-5 storytabs-container text-white">
  <div className="row g-4 justify-content-center">

    {/* TAB 1 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Nature} className="s-tab-icon mb-3" />
        <h2 className="s-tab-head fs-3">100% Organic</h2>
        <p className="s-tab-text">
          We source only the finest organic fruits<br />
          from local farms, ensuring every sip is<br />
          pure and natural.
        </p>
      </div>
    </div>

    {/* TAB 2 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Heart} className="s-tab-icon mb-3" />
        <h2 className="s-tab-head fs-3">Health First</h2>
        <p className="s-tab-text">
          Every recipe is crafted by nutritionists to<br />
          maximize health benefits without<br />
          compromising on taste.
        </p>
      </div>
    </div>

    {/* TAB 3 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Recycle} className="s-tab-icon mb-3" />
        <h2 className="s-tab-head fs-3">Sustainable</h2>
        <p className="s-tab-text">
          From eco-friendly packaging to<br />
          carbon-neutral delivery, we care about<br />
          our planet's future.
        </p>
      </div>
    </div>

  </div>
</div>

  )
}
