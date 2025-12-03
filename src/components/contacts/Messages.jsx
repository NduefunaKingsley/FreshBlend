import Location from './assets/images/Location.svg'
import Call from './assets/images/Call.svg'
import Email from './assets/images/Email.svg'

export default function Messages() {
  return (
    <div>
        <div className='contacts-header'>
            <h1 className='contacts-head'>Get In Touch</h1>
            <p className='contacts-text'>Have questions about our fresh smoothies? Want to place a bulk<br /> order? We'd love to hear from you!</p>
        </div>
        <div className='message-container'>
            <div className='social-handles m-tab'>
                <button className='location s-tab'>
                    <div className='location-header s-header'>
                        <div className='location-img s-img'>
                            <img src={Location} className='location-icon' />
                        </div>
                        <div className='location-head s-head'>
                            <h1 className='location-subhead s-subhead'>Visit Our Store</h1>
                            <p className='location-subtext s-subtext'>Fresh smoothies made daily</p>
                        </div>
                    </div>
                    <div className='location-text-contain s-contain'>
                        <p className='location-text s-text'>123 Smoothie Street <br />Fresh Valley, CA902110<br />Accra, Ghana</p>
                    </div>
                </button>
                <button className='call s-tab'>
                    <div className='call-header s-header'>
                        <div className='call-img s-img'>
                            <img src={Call} className='call-icon' />
                        </div>
                        <div className='call-head s-head'>
                            <h1 className='call-subhead s-subhead'>Call Us</h1>
                            <p className='call-subtext s-subtext'>Monday - Friday</p>
                        </div>
                    </div>
                    <div className='location-text-contain s-contain'>
                        <p className='location-text s-text'>(+233) 2093 - 03341<br />(+233) 5510 - 06413</p>
                    </div>
                </button>
                <button className='email s-tab'>
                    <div className='email-header s-header'>
                        <div className='email-img s-img'>
                            <img src={Email} className='email-icon' />
                        </div>
                        <div className='email-head s-head'>
                            <h1 className='email-subhead s-subhead'>Email Us</h1>
                            <p className='email-subtext s-subtext'>Quick respones guaranteed!</p>
                        </div>
                    </div>
                    <div className='email-text-contain s-contain'>
                        <p className='email-text s-text'>freshblend25@gmail.com <br />kingsleykaycee19@gmail.com</p>
                    </div>
                </button>
            </div>
            <div className='send-message m-tab'></div>
        </div>
    </div>
  )
}
