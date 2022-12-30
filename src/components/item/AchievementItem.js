import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AchievementItem = ({ achievement }) => {
    const [openDetail, setOpenDetail] = useState(false);
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
                <Grid container spacing={2}>
                    <Grid item style={{width: "90%"}}>
                        <Typography gutterBottom variant="h4" component="div">
                            {achievement.position} at {achievement.event}
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
                            <h5>by {achievement.organizer}</h5>
                            <p>{achievement.content}</p>
                            <p className='text-secondary'>{achievement.time}</p>
                        </Typography>
                        <Stack direction="row" spacing={1}
                            sx={{
                                display: "flex", flexWrap: "wrap",
                                '& > div': {margin: '0px 5px 5px 0px !important'}
                            }}
                        >
                            {achievement.techStack.map((tools, i) =>
                                <Chip key={i} label={tools} color="secondary" />
                                )}
                        </Stack>
                    </>
                )}
            </CardContent>
        </Card>
    )
}

export default AchievementItem;