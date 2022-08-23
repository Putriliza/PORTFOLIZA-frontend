import ProjectItem from "../item/ProjectItem"
import { useNav } from '../../customHooks/useNav';

const Projects = ({ projects }) => {
    const prjRef = useNav('Project');

    return (
        <ul ref={prjRef} id="projectContainer">
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