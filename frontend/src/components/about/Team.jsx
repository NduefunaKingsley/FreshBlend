import './About.css'
import Ceo from './assets/images/Ceo.jpg'

export default function Team() {
  return (
    <div>
        <div className='team-container'>
            <div className='team-header'>
                <h1 className='team-head'>Meet Our Passionate Team</h1>
            </div>
            <div className='team-img-container'>
                <div className='team-img'>
                    <img src={Ceo} className='team-icon' />
                    <div className='team-box'>
                        <h2 className='team-name'>Kingsley Kaycee</h2>
                        <p className='team-position p1'>Founder & CEO</p>
                    </div>
                </div>
                <div className='team-img'>
                    <img src='' className='team-icon' />
                    <div className='team-box'>
                        <h2 className='team-name'>Kaycee</h2>
                    <p className='team-position p2'>Assistant CEO</p>
                    </div>
                </div>
                <div className='team-img'>
                    <img src='' className='team-icon' />
                    <div className='team-box'>
                        <h2 className='team-name'>Nduefuna </h2>
                    <p className='team-position p3'>Head Chef</p>
                    </div>
                </div>
                <div className='team-img'>
                    <img src='' className='team-icon' />
                    <div className='team-box'>
                        <h2 className='team-name'>Kay</h2>
                    <p className='team-position p4'>Assistant Chef</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
