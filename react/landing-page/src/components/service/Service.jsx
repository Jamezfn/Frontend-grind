import './service.css';
import services from "../../assets/service"

function Service() {
    return (
        <>
        { services.map((service, index) => (
            <div className="service-container">
                <div className="service-icon">
                    <img src={ service.image } alt="service-icon" />
                </div>

                <div className="service-head">
                    <h5>{ service.name }</h5>
                </div>

                <div className="service-head">
                    <p>{ service.body }</p>
                </div>
            </div>
        ))}
        </>
    );
}

export default Service;