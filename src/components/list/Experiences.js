import ExperienceItem from "../item/ExperienceItem"
import Carousel from 'react-bootstrap/Carousel';
import './Experience.css'

const Experiences = ({ experiences }) => {
    return (
        <div id="experienceContainer"
            style={{minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <h1 style={{color: 'white',
                textAlign:'center',
                margin: '50px 0',
                textShadow: '3px 1px 15px darkslateblue',
                fontFamily: 'Cookie, cursive',
                fontSize: '80px'}}>
                <b>Experiences</b>
            </h1>
            <Carousel
                variant="dark"
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