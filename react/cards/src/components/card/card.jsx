import "./card.css"

export default function Card({ name, image, role, bio, socials }) {
    return (
        <div className="card">
            <img src={image} />
            <div>
                <h2>{name}</h2>
                <h3>{role}</h3>
                <p>{bio}</p>
                <div className="socials">
                    { socials.map((social) => {
                        <button key={social}>
                            <i className={`fa-brands fa-${social}`}></i>
                        </button>
                    }) }
                </div>
            </div>
        </div>
    )
}