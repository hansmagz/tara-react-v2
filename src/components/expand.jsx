import React from 'react';
import { Stack, Container, Typography, Button, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Truck from '../assets/truck-hero.png';
import GooglePlay from '../assets/google-play-button.png';
import Appstore from '../assets/appstore-button.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailIcon from '@mui/icons-material/Mail';
import Dash from '../assets/dash.svg';
import Reveal from './reveal';
import '../styles/styles.css'

const Hero = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box className='expandBox'>
      <Grid container justifyContent={'space-between'}>
        <Grid item md={12} sm={12} xs={12}></Grid>
        <Grid item md={12} sm={12} xs={12} alignSelf={'center'} className='text-center'>
          <Reveal>
            <Typography variant={isSmScreen ? 'h2' : 'h1'} fontWeight={900} fontFamily={'Roboto'} color={'#80FFFF'}>
              EXPANDING SOON
            </Typography>
            <Typography variant={isSmScreen ? 'h6' : 'h5'} fontWeight={300} fontFamily={'Roboto'} color={'#80FFFF'}>
              TO CEBU, DAVAO, & GENSAN
            </Typography>
          </Reveal>
        </Grid>

        <Grid item md={12} sm={12} xs={12} mb={4} alignSelf={'end'} className='text-center'>
          <Reveal>
            <FacebookIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <InstagramIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <TwitterIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
            <MailIcon sx={{ width: '40px', height: '40px', marginRight: '0.5em' }} />
          </Reveal>
        </Grid>
      </Grid>
    </Box >
  );
};

export default Hero;