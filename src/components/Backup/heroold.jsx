import React from 'react';
import { Stack, Container, Typography, Button, Box, Grid } from '@mui/material';
import Logo from '../assets/logo.png';
import Phone from '../assets/phone5.png';
import Reveal from '../reveal';
import '../styles/styles.css'

const Hero = () => {
  return (
    <Box className='heroBox'>
      {/* <Box className='heroBG'></Box> */}
      <Container>
        <Grid className='heroContent' container>
          <Grid item md={7}
          // className='text-center'
          >
            <Reveal>
              <Box textAlign={'center'}>
                <img src={Logo} height={'300'}></img>
              </Box>
              <Grid container item alignItems={'center'}>
                <Grid item xs={12} md={12} mt={4}>
                  <Typography variant="h3" fontWeight={700} className='title'>
                    Your all-in-one delivery app
                  </Typography>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Typography variant="h6" className='subtitle'>
                    Swiftly Yours: Your Ultimate Delivery Companion.
                  </Typography>
                </Grid>
              </Grid>
              {/* <Button
                variant="contained"
                color="primary"
                sx={{ width: '200px', fontSize: '20px' }}
                href="mailto:tara@seventh-pillar.com"
              >
                Download App
              </Button> */}
              <a href="#" class="custom-btn">
                Download App
              </a>
            </Reveal>
          </Grid>
          <Grid item md={5}>
            <Reveal>
              <img src={Phone} height={'600'}></img>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;