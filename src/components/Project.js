const Project = ({ project }) => {
    return (
        <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.content}</p>
        </li>
    )
  }
  
export default Project