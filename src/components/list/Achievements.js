import AchievementItem from "../item/AchievementItem"
import { useNav } from '../../customHooks/useNav';

const Achievements = ({ achievements }) => {
    const achievRef = useNav('Achievement');
    return (
        <div ref={achievRef} id="achievementContainer">
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