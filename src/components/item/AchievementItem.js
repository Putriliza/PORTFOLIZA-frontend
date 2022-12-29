import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const AchievementItem = ({ achievement }) => {
    return (
        <Card key={achievement.id}>
            <CardActionArea>
                <CardMedia
                        component="img"
                        height="400"
                        image={`${process.env.PUBLIC_URL+achievement.imgLink}`}
                        alt={achievement.event}
                    />
            </CardActionArea>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {achievement.position} at {achievement.event}
                </Typography>
                <Typography variant="body1" component="div">
                    <h5>by {achievement.organizer}</h5>
                    <p>{achievement.content}</p>
                    <p className='text-secondary'>{achievement.time}</p>
                </Typography>
                <Stack direction="row" spacing={1}
                    sx={{
                        display: "flex", flexWrap: "wrap",
                        '& .css-1ximusq-MuiChip-root': {margin: '0px 5px 5px 0px'},
                        '& > :not(style)+:not(style)': {marginLeft: '0px'}
                    }}
                >
                    {achievement.techStack.map((tools, i) =>
                        <Chip key={i} label={tools} color="secondary" />
                        )}
                </Stack>
            </CardContent>
            
        </Card>
    )
}

export default AchievementItem;