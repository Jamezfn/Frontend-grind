import './banner.css';
import doctor from '../../assets/images/banner-doctor.png'

function Banner() {
    return (
        <div className='banner-container'>
            <div className="banner-content">
                <div className="banner-heading">
                    <h2>Every good thing<br/>starts with good<br/>health</h2>
                </div>

                <div className="banner-sub-heading">
                    We are here to serve serve people with patient centered-care to deliver outstanding healthcare for better lives.
                </div>

                <div className="banner-buttons">
                    <button className='banner-appointment-button'>
                        Request appointment
                    </button>
                    <button className='banner-learn-button'>Learn More</button>
                </div>
            </div>

            <div className="banner-graphics">
                <img src={ doctor } alt="doctor" />
            </div>

        </div>
    );
}

export default Banner;