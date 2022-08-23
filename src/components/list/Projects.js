import ProjectItem from "../item/ProjectItem"
import { useNav } from '../../customHooks/useNav';

const Projects = ({ projects }) => {
    const prjRef = useNav('Project');

    return (
        <div ref={prjRef} id="projectContainer">
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