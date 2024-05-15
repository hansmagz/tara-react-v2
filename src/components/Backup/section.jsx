import React from 'react';
import { Grid, Typography, Button, Box, Container, Fade } from '@mui/material';
import Reveal from '../reveal';
import Phone from '../assets/phone.png';
import Phone2 from '../assets/phone3.png';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ marginTop: '10em', marginBottom: '10em' }}
      // className='services'
      // sx={{ backgroundImage: { xs: '', md: `url(${BG})` }, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat' }}
      >
        {/* <Typography variant="h3" fontWeight={700} className='title'>
          Offered Services
        </Typography> */}
        <Grid container>
          <Grid item md={4}>
            <Reveal>
              <img src={Phone} height={'600'}></img>
            </Reveal>
          </Grid>
          <Grid item md={8} alignSelf={'center'}>
            <Reveal>
              <Typography variant="h3" color={'white'} fontWeight={700} mb={4}>
                Title 1
              </Typography>
              <Typography variant="h4" color={'white'}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
              </Typography>
            </Reveal>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={8} alignSelf={'center'}>
            <Reveal>
              <Typography variant="h3" color={'white'} fontWeight={700} mb={4}>
                Title 2
              </Typography>
              <Typography variant="h4" color={'white'}>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
              </Typography>
            </Reveal>
          </Grid>
          <Grid item md={4}>
            <Reveal>
              <img src={Phone2} height={'600'}></img>
            </Reveal>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12} className='text-center' mt={8}>
            <Reveal>
              <a href="#" class="custom-btn">
                Download App
              </a>
            </Reveal>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Section;