import ExperienceItem from "../item/ExperienceItem"

const Experiences = ({ experiences }) => {
    return (
        <div id="experienceContainer">
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