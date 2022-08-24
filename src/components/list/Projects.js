import ProjectItem from "../item/ProjectItem"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Projects = ({ projects }) => {

    return (
        <Box id="projectContainer" sx={{ flexGrow: 1 }}>
            <h1>Projects</h1>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 2, sm: 2, md: 6 }}>
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