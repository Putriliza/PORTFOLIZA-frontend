import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const AchievementItem = ({ achievement }) => {
    return (
        <Card key={achievement.id}>
            <CardActionArea>
                <CardMedia
                        component="img"
                        height="400"
                        image={`${process.env.PUBLIC_URL+achievement.photoUrl}`}
                        alt={achievement.event}
                    />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {achievement.position} at {achievement.event}
                </Typography>
                <Typography variant="body2" component="div">
                    <h5>by {achievement.organizer}</h5>
                    <p>{achievement.content}</p>
                    <p className='text-secondary'>{achievement.time}</p>
                </Typography>
            </CardContent>
            
        </Card>
    )
}

export default AchievementItem;