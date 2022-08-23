const ProjectItem = ({ project }) => {
    return (
        <li key={project.id}>
            <h2>{project.title}</h2>
            <p className="text-secondary">{project.time}</p>
            <img src={`${process.env.PUBLIC_URL+project.imgLink}`} alt="" className='img-fluid' />
            <p>{project.content}</p>
            <p>Role:</p>
            <ul>
                {project.role.map((role, i) =>
                    <li key={i}>{role}</li>
                )}
            </ul>
            <p>Tech Stack:</p>
            <ul>
                {project.techStack.map((tools, i) =>
                    <li key={i}>{tools}</li>
                )}
            </ul>
            <a href={project.srcLink} target="_blank" rel="noreferrer">Github</a>
            {project.viewsLink === ""
                ? null
                : <a href={project.viewsLink} target="_blank" rel="noreferrer">View</a>}

        </li>
    )
}

export default ProjectItem;