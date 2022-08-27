import AchievementItem from "../item/AchievementItem"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Achievements = ({ achievements }) => {
    return (
        <Box id="achievementContainer" sx={{ flexGrow: 1 }}
            style={{minHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'}}
        >
            <h1 style={{color: 'darkslateblue',
                textAlign:'center',
                margin: '50px 0',
                textShadow: '3px 1px 15px white',
                fontFamily: 'Cookie, cursive',
                fontSize: '80px'}}>
                <b>Achievements</b>
            </h1>
            <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 2, sm: 2, md: 6 }}>
                {achievements.map((achievement, i) => 
                    <Grid item xs={2} sm={2} md={3} key={i}>
                        <AchievementItem
                        key={achievement.id}
                        achievement={achievement}
                    />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
  }
  
export default Achievements