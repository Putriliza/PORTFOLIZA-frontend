import AchievementItem from "../item/AchievementItem"

const Achievements = ({ achievements }) => {
    return (
        <ul>
            {achievements.map(achievement => 
            <AchievementItem
                key={achievement.id}
                achievement={achievement}
            />
            )}
        </ul>
    )
  }
  
export default Achievements