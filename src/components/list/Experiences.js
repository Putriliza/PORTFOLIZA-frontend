import ExperienceItem from "../item/ExperienceItem"

const Experiences = ({ experiences }) => {
    return (
        <ul>
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