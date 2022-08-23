import AchievementItem from "../item/AchievementItem"

const Achievements = ({ achievements }) => {
    return (
        <div id="achievementContainer">
            <h1>Achievements</h1>
            <ul>
                {achievements.map(achievement => 
                <AchievementItem
                    key={achievement.id}
                    achievement={achievement}
                />
                )}
            </ul>
        </div>
    )
  }
  
export default Achievements