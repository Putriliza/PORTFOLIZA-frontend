import ExperienceItem from "../item/ExperienceItem"
import { useNav } from '../../customHooks/useNav';

const Experiences = ({ experiences }) => {
    const expRef = useNav('Experience');
    return (
        <ul ref={expRef} id="experienceContainer">
            {experiences.map(experience => 
            <ExperienceItem
                key={experience.id}
                experience={experience}
            />
            )}
        </ul>
    )
  }
  
export default Experiences