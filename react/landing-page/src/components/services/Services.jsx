import './services.css';
import Service from '../service/Service';

function Services() {
    return (
        <div className="services-container">
            <h3>Our services</h3>
            <div className="services-wrapper">
                <Service></Service>
            </div>
        </div>
    );
}

export default Services;