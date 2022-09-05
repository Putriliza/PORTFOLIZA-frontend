import ProjectItem from "../item/ProjectItem"
import { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import {MdExpandMore, MdExpandLess} from 'react-icons/md';

const Projects = ({ projects }) => {
    const [showAllProjects, setShowAllProjects] = useState(false);
    const handleMoreClick = () => {
        setShowAllProjects(true);
    }
    const handleLessClick = () => {
        setShowAllProjects(false);
    }

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
                    showAllProjects
                    ?   <Grid item xs={2} sm={2} md={3} key={i}>
                            <ProjectItem
                            key={project.id}
                            project={project}
                        />
                        </Grid>
                    : i < 4
                        ?   <Grid item xs={2} sm={2} md={3} key={i}>
                                <ProjectItem
                                key={project.id}
                                project={project}
                            />
                            </Grid>
                        : null

                )}
            </Grid>
            {
                showAllProjects === false
                ?   <Button variant="outlined" onClick={handleMoreClick}
                    style={{
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '50px',
                        background: 'rgb(0,0,0,0.1)',
                        padding: '10px 15px 0 20px',
                        marginTop: '50px'}}
                    >
                            <h5>More <MdExpandMore fontSize='40px'/></h5>
                    </Button>
                :   <Button variant="outlined" onClick={handleLessClick}
                    style={{
                        color: 'white',
                        border: '2px solid white',
                        borderRadius: '50px',
                        background: 'rgb(0,0,0,0.1)',
                        padding: '10px 15px 0 20px',
                        marginTop: '50px'}}
                    >
                            <h5>Less <MdExpandLess fontSize='40px'/></h5>
                    </Button>
            }
        </Box>
    )
  }
  
export default Projects