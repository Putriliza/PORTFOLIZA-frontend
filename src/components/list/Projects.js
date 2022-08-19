import ProjectItem from "../item/ProjectItem"

const Projects = ({ projects }) => {
    return (
        <ul>
            {projects.map(project => 
            <ProjectItem
                key={project.id}
                project={project}
            />
            )}
        </ul>
    )
  }
  
export default Projects