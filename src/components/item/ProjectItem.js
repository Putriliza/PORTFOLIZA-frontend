import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const ProjectItem = ({ project }) => {
    return (
        <Card key={project.id}>
            <CardActionArea>
                <CardMedia
                    component='video'
                    src={`${process.env.PUBLIC_URL+project.imgLink}`}
                    autoPlay
                    loop
                    muted
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {project.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                        
                        <p>{project.content}</p>
                        {
                            project.role.length === 0
                            ? null
                            : <>
                                <p style={{margin: 0}}>Role:</p>
                                <ul>
                                    {project.role.map((role, i) =>
                                        <li key={i}>{role}</li>
                                    )}
                                </ul>
                                </>
                        }
                        <Stack direction="row" spacing={1}
                            sx={{
                                display: "flex", flexWrap: "wrap",
                                '& .css-1ximusq-MuiChip-root': {margin: '0px 5px 5px 0px'},
                                '& > :not(style)+:not(style)': {marginLeft: '0px'}
                            }}
                        >
                            {project.techStack.map((tools, i) =>
                                <Chip key={i} label={tools} color="secondary" />
                                )}
                        </Stack>
                    </Typography>
                    <Typography variant="body2" component="div">
                        <p className='text-secondary' style={{textAlign: "right"}}>{project.time}</p>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                {
                    project.srcLink === ""
                        ? null
                        : <a href={project.srcLink} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                }
                {
                    project.viewsLink === ""
                    ? null
                    : <a href={project.viewsLink} target="_blank" rel="noreferrer"><LaunchIcon /></a>
                }
                
            </CardActions>
        </Card>

    )
}

export default ProjectItem;