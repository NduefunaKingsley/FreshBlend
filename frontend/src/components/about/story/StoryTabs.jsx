import './Story.css'
import Nature from '../assets/images/Nature.svg'
import Heart from '../assets/images/Heart.svg'
import Recycle from '../assets/images/Recycle.svg'

export default function StoryTabs() {
  return (
    <div className="container my-5 text-white">
  <div className="row g-4 justify-content-center text-center">
    {/* Tab 1 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Nature} className="mb-3" />
        <h2 className="fs-3">100% Organic</h2>
        <p className="text-secondary">
          We source only the finest organic fruits<br />
          from local farms, ensuring every sip is<br />
          pure and natural.
        </p>
      </div>
    </div>

    {/* Tab 2 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Heart} className="mb-3" />
        <h2 className="fs-3">Health First</h2>
        <p className="text-secondary">
          Every recipe is crafted by nutritionists to<br />
          maximize health benefits without<br />
          compromising on taste.
        </p>
      </div>
    </div>

    {/* Tab 3 */}
    <div className="col-12 col-md-4">
      <div className="story-tab h-100 border rounded-4 p-4 bg-dark bg-opacity-25">
        <img src={Recycle} className="mb-3" />
        <h2 className="fs-3">Sustainable</h2>
        <p className="text-secondary">
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
