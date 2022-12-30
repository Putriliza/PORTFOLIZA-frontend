import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const ProjectItem = ({ project }) => {
    const [openDetail, setOpenDetail] = useState(false);

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
                    <Grid container spacing={2}>
                        <Grid item style={{width: "90%"}}>
                            <Typography gutterBottom variant="h4" component="div">
                                {project.title}
                            </Typography>
                        </Grid>
                        <Grid item style={{width: "10%"}}>
                            <IconButton
                                variant="contained"
                                onClick={() => setOpenDetail(!openDetail)}
                                sx={{float: "right",
                                    background: openDetail ? "white" : "darkslateblue",
                                    color: openDetail ? "darkslateblue" : "white",
                                    border: "1px solid darkslateblue",
                                    borderRadius: "50px",
                                }}
                            >
                                {openDetail ?
                                    <ArrowDropDownIcon style={{fontSize:'40px', margin:'-10px'}} />
                                    :
                                    <ArrowRightIcon style={{fontSize:'40px', margin:'-10px'}} />
                                }
                            </IconButton>
                        </Grid>
                    </Grid>

                    {openDetail && (
                        <>
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
                                    '& > div': {margin: '0px 5px 5px 0px !important'}
                                }}
                            >
                                {project.techStack.map((tools, i) =>
                                    <Chip key={i} label={tools} color="secondary" />
                                    )}
                            </Stack>
                        </Typography>
                        </>
                    )}
                </CardContent>
            </CardActionArea>
            {openDetail && (
                <CardActions>
                    <Grid container spacing={2}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "0px 16px 0px 0px"
                        }}
                    >
                        <Grid item
                            sx={{
                                "& > a": {margin: "0px 5px"}
                            }}
                        >
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
                        </Grid>
                        <Grid item
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center"
                            }}
                        >
                            <Typography variant="body2" component="div">
                                <p className='text-secondary' style={{textAlign: "right", margin: 0}}>
                                    {project.time}
                                </p>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardActions>
            )}
        </Card>

    )
}

export default ProjectItem;