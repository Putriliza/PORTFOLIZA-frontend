import ExperienceItem from "../item/ExperienceItem"
import Carousel from 'react-bootstrap/Carousel';

const Experiences = ({ experiences }) => {
    return (
        <div id="experienceContainer">
            <h1>Experiences</h1>
            <Carousel
                variant="dark"
                style={{padding: "0 10%"}}
                indicators={false}
            >
                {experiences.map(experience => 
                    <Carousel.Item key={experience.id}>
                        <ExperienceItem
                            key={experience.id}
                            experience={experience}
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
  }
  
export default Experiences