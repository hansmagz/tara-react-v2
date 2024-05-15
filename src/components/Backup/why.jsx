import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from '../reveal';
import Line from '../assets/line.svg';
import Slant from '../assets/slant.jpg';
import '../styles/styles.css'

const Section = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container
        bgcolor={'#80FFFF'}
        sx={{ backgroundImage: `url(${Slant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'bottom' }}
        px={{ xs: '0', sm: '0', md: '10em', lg: '26em' }}
        py={'6em'}
        justifyContent="space-between"
        // alignItems="center"
        spacing={4}
      >
        {/* <Grid item md={12} sm={12} xs={12} className='text-center'>
          <Reveal>
            <Stack>
              <Typography fontFamily={'Coolvetica'} variant={isSmScreen ? 'h2' : 'h1'} color={'white'} lineHeight={isSmScreen ? '0.9em' : '0.8em'}>
                ABOUT US
              </Typography>
              <img src={Line} height={isSmScreen ? '9px' : '11px'}></img>
            </Stack>
          </Reveal>
        </Grid> */}
        <Grid item md={12} mt={6}>
          <Box bgcolor={'white'} color={'#80FFFF'} textAlign={'center'} borderRadius={'40px'} py={12} px={isSmScreen ? 3 : 6} className='why-card'>
            <Reveal>
              <span style={{ fontSize: '2rem', fontFamily: 'Coolvetica', border: '2px solid #80FFFF', borderRadius: '10px', paddingInline: '40px', paddingBlock: '6px' }}>About Us</span>
              <Typography fontSize={20} mt={4} textAlign={'justify'}>Tara is your go-to destination for seamless transportation solutions in the Philippines. From logistics to rent-a-car services, we're dedicated to making your travel experience smooth, efficient, and enjoyable. Whether you're commuting daily or exploring new destinations, Tara is here to simplify your journey. Welcome to a new era of transportation with Tara.</Typography>
            </Reveal>
          </Box>
        </Grid>
        {/* <Grid item md={12} mt={6}>
          <Box bgcolor={'white'} borderRadius={'40px'} py={12} px={isSmScreen ? 3 : 6} className='why-card'>
            <Grid container spacing={6} color={'#80FFFF'}>
              <Grid item md={6} textAlign={'center'}>
                <Reveal>
                  <span style={{ fontSize: '3rem', fontFamily: 'Coolvetica', border: '2px solid #80FFFF', borderRadius: '10px', paddingInline: '40px', paddingBlock: '6px' }}>Mission</span>
                  <Typography fontSize={24} mt={4} textAlign={'justify'} lineHeight={'1.2em'}>Our mission to help Filipinos go anywhere. It pushes us to constantly reimagine how we can move better for the Philippines. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. We help Filipino’s reach their destination from start to finish.</Typography>
                </Reveal>
              </Grid>
              <Grid item md={6} textAlign={'center'}>
                <Reveal>
                  <span style={{ fontSize: '3rem', fontFamily: 'Coolvetica', border: '2px solid #80FFFF', borderRadius: '10px', paddingInline: '40px', paddingBlock: '6px' }}>Vision</span>
                  <Typography fontSize={24} mt={4} textAlign={'justify'} lineHeight={'1.2em'}>Becoming the All-In-One Transportation app for the Filipino People</Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Box>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Section;