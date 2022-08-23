import ExperienceItem from "../item/ExperienceItem"
import { useNav } from '../../customHooks/useNav';

const Experiences = ({ experiences }) => {
    const expRef = useNav('Experience');
    return (
        <div ref={expRef} id="experienceContainer">
            <h1>Experiences</h1>
            <ul>
                {experiences.map(experience => 
                <ExperienceItem
                    key={experience.id}
                    experience={experience}
                />
                )}
            </ul>
        </div>
    )
  }
  
export default Experiences