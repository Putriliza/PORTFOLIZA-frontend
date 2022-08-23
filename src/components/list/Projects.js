import ProjectItem from "../item/ProjectItem"

const Projects = ({ projects }) => {

    return (
        <div id="projectContainer">
            <h1>Projects</h1>
            <ul>
                {projects.map(project => 
                <ProjectItem
                    key={project.id}
                    project={project}
                />
                )}
            </ul>
        </div>
    )
  }
  
export default Projects