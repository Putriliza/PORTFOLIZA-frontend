import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'react-bootstrap/Image'

import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { BsLinkedin, BsGithub,} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

import './Home.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, .3)',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'left',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('lg')]: {
    margin:'0 -200px 0 0', padding:'50px 200px 50px 50px'
  },
  [theme.breakpoints.down('lg')]: {
    margin:'0 -150px 0 0', padding:'50px 150px 50px 50px'
  },
  [theme.breakpoints.down('md')]: {
    margin:'-150px 0 0 0', padding:'150px 50px 50px 50px'
  },
  [theme.breakpoints.down('sm')]: {
    margin:'-250px 0 0 0', padding:'250px 50px 50px 50px'
  },
}));

const Home = () => {
  return (
    <Box id="homeContainer"
        sx={{ flexGrow: 1, minHeight: '90vh', display: 'flex', alignItems: 'center'}}>
      <Grid container
        alignItems="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12}}
        justifyContent="center"
        style={{ marginBlock:'auto'}}>
        
        <Grid item xs={8} sm={8} md={8} key={1} order={{ xs: 2, sm: 2, md:1 }}>
          <Item>
            <h1 style={{color: 'black',
                textShadow: '3px 1px 15px white',
                fontFamily: 'Cookie, cursive',
                fontSize: '60px'}}
                className="rotate-obj">
                <b>Hello,</b>
            </h1>
            <h2>I am  Putri Nurhaliza!</h2>
            <p style={{fontSize:"20px"}}>A 3rd year student who is passionate in Software Engineering.
              Contributed to several projects of web/app development, digital marketing, and robotics.
              Able to work well in a team with leadership and fast learning skills.</p>
              <Tooltip title="LinkedIn">
                <IconButton href="https://www.linkedin.com/in/putri-nurhaliza" target="_blank" rel="noreferrer">
                  <BsLinkedin color='darkslateblue' />
                </IconButton>
              </Tooltip>
              <Tooltip title="Github">
                <IconButton href="https://www.github.com/putriliza" target="_blank" rel="noreferrer">
                  <BsGithub color='darkslateblue' />
                </IconButton>
              </Tooltip>
              <Chip
                icon={<MdEmail size="30px" color='white'/>}
                label="Contact Me"
                color="primary"
                size="large"
                onClick={() => window.open('mailto:putriliza05@gmail.com')}
                clickable
                style = {{padding: '0 10px', background: 'darkslateblue' }}
              />
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={2} order={{ xs: 1, sm: 1, md:2 }}
          style={{zIndex: '1'}}
        >
          <Image
            src={`${process.env.PUBLIC_URL}/assets/home/PutriNurhaliza2-square.jpg`}
            alt="me"
            fluid
            roundedCircle
            style={{border: '20px solid rgba(255, 255, 255, .3)'}}
            className="rotate-obj"
            />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home