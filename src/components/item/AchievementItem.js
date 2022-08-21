const AchievementItem = ({ achievement }) => {
    return (
        <li key={achievement.id}>
            <h2>{achievement.position} at {achievement.event}</h2>
            <h3>by {achievement.organizer}</h3>
            <p>{achievement.content}</p>
            <img src={`${process.env.PUBLIC_URL+achievement.photoUrl}`} alt="" className='img-fluid' />
        </li>
    )
}

export default AchievementItem;