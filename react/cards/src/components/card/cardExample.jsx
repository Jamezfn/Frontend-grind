import Card from "./card";
import image from "./image.jpg"

const socials = ["dribbble", "pinterest", "codepen"]

export default function CardExample(){
    return (
        <section className="page card-page">
            <Card 
                name="Jill Scott"
                role="UX Designer"
                image={image}
                bio="Transforming ideas into realities, creating interfaces that inspire
                    and engage users dreams."
                socials={socials}
            ></Card>
        </section>
    )
}