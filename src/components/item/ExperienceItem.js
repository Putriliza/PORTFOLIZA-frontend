import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ExperienceItem = ({ experience }) => {
    return (
        <Card key={experience.id} sx={{ display: 'flex', backgroundColor: 'floralwhite', borderRadius: '10px' }}>
            <CardMedia
                component="img"
                sx={{ width: '400px' }}
                image={`${process.env.PUBLIC_URL+experience.photoUrl}`}
                alt={experience.organization}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        {experience.position} at {experience.organization}
                    </Typography>
                    <Typography variant="body2" component="div">
                        <p className="text-secondary">{experience.time}</p>
                        <p>{experience.content}</p>
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default ExperienceItem;