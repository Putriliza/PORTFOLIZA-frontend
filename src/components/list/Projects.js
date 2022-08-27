import ProjectItem from "../item/ProjectItem"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Projects = ({ projects }) => {

    return (
        <Box id="projectContainer" sx={{ flexGrow: 1 }}
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
                <b>Projects</b>
            </h1>
            <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 2, sm: 2, md: 6 }}>
                {projects.map((project, i) => 
                    <Grid item xs={2} sm={2} md={3} key={i}>
                        <ProjectItem
                        key={project.id}
                        project={project}
                    />
                    </Grid>
                )}
            </Grid>
        </Box>
    )
  }
  
export default Projects