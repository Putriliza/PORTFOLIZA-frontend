import AchievementItem from "../item/AchievementItem"
import { useNav } from '../../customHooks/useNav';

const Achievements = ({ achievements }) => {
    const achievRef = useNav('Achievement');
    return (
        <ul ref={achievRef} id="achievementContainer">
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