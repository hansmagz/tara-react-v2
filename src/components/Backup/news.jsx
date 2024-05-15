import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from '../reveal';
import Truck from '../assets/truck.png';
import CarRental from '../assets/car-rent.png';
import News1 from '../assets/news1.png';
import News2 from '../assets/news2.png';
import '../styles/styles.css'

const Section = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container
        bgcolor={'#3B3B3B'}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        py={'10em'}
        color={'white'}
      // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center";
      // spacing={4}
      >
        <Grid item md={12} sm={12} xs={12} px={{ xs: '2em', md: '6em', lg: '6em' }} pb={'6em'} textAlign={isSmScreen ? '-webkit-center' : '-webkit-right'}>
          <Reveal>
            <span style={{ fontSize: `${isSmScreen ? '4rem' : '6rem'}`, fontFamily: 'Coolvetica' }}>LATEST NEWS</span>
          </Reveal>
        </Grid>
        <Grid container mb={8}>
          <Grid container spacing={{ md: 2, sm: 0, xs: 0 }} md={6} sm={12} xs={12} mb={{ md: 0, sm: 8, xs: 8 }}>
            <Grid item md={6} sm={12} xs={12} height={'400px'} mb={{ md: 0, sm: 2, xs: 2 }} sx={{ backgroundImage: `url(${News1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: `${isSmScreen ? 'center' : 'right'}` }}>
              <Reveal>
                {/* <img src={News1}></img> */}
                <Box sx={{ backgroundImage: `url(${News1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', width: '100%', height: 'auto' }} width={'100%'} height={'auto'}></Box>
              </Reveal>
            </Grid>
            <Grid item md sm={12} xs={12} container direction="column" spacing={2} justifyContent={'space-between'}>
              <Grid item xs>
                <Reveal>
                  <Typography variant='h3' lineHeight={'0.8em'} fontFamily={'Coolvetica'}>“Lorem Ipsum dolor...”</Typography>
                  <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={{ md: 2, sm: 0, xs: 0 }} md={6} sm={12} xs={12} mb={{ md: 0, sm: 8, xs: 8 }}>
            <Grid item md={6} sm={12} xs={12} height={'400px'} mb={{ md: 0, sm: 2, xs: 2 }} sx={{ backgroundImage: `url(${News2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: `${isSmScreen ? 'center' : 'right'}` }}>
              <Reveal>
                {/* <img src={News1}></img> */}
                <Box sx={{ backgroundImage: `url(${News1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'bottom', width: '100%', height: 'auto' }} width={'100%'} height={'auto'}></Box>
              </Reveal>
            </Grid>
            <Grid item md sm={12} xs={12} container direction="column" spacing={2} justifyContent={'space-between'}>
              <Grid item xs>
                <Reveal>
                  <Typography variant='h3' lineHeight={'0.8em'} fontFamily={'Coolvetica'}>“Lorem Ipsum dolor...”</Typography>
                  <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;