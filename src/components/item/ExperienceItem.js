const ExperienceItem = ({ experience }) => {
    return (
        <li key={experience.id}>
            <h2>{experience.position} at {experience.organization}</h2>
            <p className="text-secondary">{experience.time}</p>
            <p>{experience.content}</p>
            <img src={`${process.env.PUBLIC_URL+experience.photoUrl}`} alt="" className='img-fluid' />
        </li>
    )
}

export default ExperienceItem;