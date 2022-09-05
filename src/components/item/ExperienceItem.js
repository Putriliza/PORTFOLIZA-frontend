import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';

import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LanguageIcon from '@mui/icons-material/Language';
import { BsInstagram } from 'react-icons/bs';

const ExpCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    color: 'white',
    backgroundColor: 'rgb(65, 22, 130, 0.4)',
    borderRadius: '10px',
    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
}));

const ExpCardMedia = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        width: '40%',
      },
    [theme.breakpoints.down('md')]: {
        width: '100%',
      },
}));

const ExperienceItem = ({ experience }) => {
    return (
        <ExpCard key={experience.id}>
            <ExpCardMedia
                component="img"
                image={`${process.env.PUBLIC_URL+experience.imgLink}`}
                alt={experience.organization}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h4">
                        {experience.position} at {experience.organization}
                    </Typography>
                    <Typography variant="body1" component="div">
                        <p style={{color:'black'}}>{experience.time}</p>
                        <p>{experience.content}</p>
                        {
                             experience.role.length === 0
                             ? null
                             : <>
                                 <p style={{margin: 0}}>Role:</p>
                                 <ul>
                                     {experience.role.map((role, i) =>
                                         <li key={i}>{role}</li>
                                     )}
                                 </ul>
                                 </>
                        }
                    </Typography>
                </CardContent>
                <CardActionArea style={{margin: '0 0 20px 10px'}}>
                    {
                        experience.igLink === ''
                        ? null
                        :
                        <Tooltip title="Instagram" style={{height:"30px", width:"30px", padding:"5px", marginRight:"10px", backgroundColor:'darkslateblue'}}>
                            <IconButton href={experience.igLink} target="_blank" rel="noreferrer">
                                <BsInstagram color='white'/>
                            </IconButton>
                        </Tooltip>
                    }
                    {
                        experience.webLink === ''
                        ? null
                        :
                        <Chip
                            icon={<LanguageIcon size="30px" color='white'/>}
                            label={experience.webLink}
                            color="primary"
                            size="large"
                            onClick={() => window.open(experience.webLink)}
                            clickable
                            style = {{padding: '0 10px', background: 'darkslateblue' }}
                        />
                    }
                </CardActionArea>

            </Box>
        </ExpCard>
    )
}

export default ExperienceItem;