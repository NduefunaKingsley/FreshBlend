import './Story.css'
import Nature from '../assets/images/Nature.svg'
import Heart from '../assets/images/Heart.svg'
import Recycle from '../assets/images/Recycle.svg'

export default function StoryTabs() {
  return (
    <div>
        <div className='storytabs-container'>
            <div className='story-tab s-tab1'>
                <img src={Nature} className='s-tab-icon' />
                <h1 className='s-tab-head'>100% Organic</h1>
                <p className='s-tab-text'>We source only the finest organic fruits<br />from local farms, ensuring every sip is<br />pure and natural.</p>
            </div>
            <div className='story-tab s-tab2'>
                <img src={Heart} className='s-tab-icon' />
                <h1 className='s-tab-head'>Health First</h1>
                <p className='s-tab-text'>Every recipe is crafted by nutritionists to<br />maximize health benefits without<br />compromising on taste.</p>
            </div>
            <div className='story-tab s-tab3'>
                <img src={Recycle} className='s-tab-icon' />
                <h1 className='s-tab-head'>Sustainable</h1>
                <p className='s-tab-text'>From eco-friendly packaging to<br />carbon-neutral delivery, we care about<br />our planet's future.</p>
            </div>
        </div>
    </div>
  )
}
