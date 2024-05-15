import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from '../reveal';
import Truck from '../assets/truck.png';
import CarRental from '../assets/car-rent.png';
import TruckCar from '../assets/truck-car2.png';
import Slant from '../assets/slant.jpg';
import '../styles/styles.css'

const Section = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <>
      <Grid container
        bgcolor={'#3D3D3D'}
        // sx={{ backgroundImage: `url(${Slant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        py={'10em'}
        color={'white'}
      // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center";
      // spacing={4}
      >
        <Grid item md={12} sm={12} xs={12} px={{ xs: '2em', md: '6em', lg: '6em' }} pb={'6em'} textAlign={isSmScreen ? '-webkit-center' : '-webkit-left'}>
          <Reveal>
            <div style={{ border: '4px solid #FFFFFF', borderRadius: '20px', paddingInline: '14px', paddingBlock: '0px' }}>
              <span style={{ fontSize: `${isSmScreen ? '4rem' : '6rem'}`, fontFamily: 'Coolvetica' }}>OUR SERVICES</span>
            </div>
          </Reveal>
        </Grid>
        {/* <Grid container item px={{ xs: '2em', md: '8em', lg: '8em' }}>
          <Grid item md={6} sm={12} xs={12}>
            <Grid container item>
              <Grid item mr={3}>
                <img src={Truck} style={{ backgroundColor: 'white', paddingInline: '1em', paddingBlock: '3em', borderRadius: '2.5em' }}></img>
              </Grid>
              <Grid item>
                <Typography variant='h3' lineHeight={'0.8em'} fontFamily={'Coolvetica'}>Port Delivery</Typography>
                <Typography variant='h5' lineHeight={'0.8em'}>Manila & Subic</Typography>
                <Typography variant='h5' lineHeight={'0.8em'}>Lorem ipsum dolor sit amet, ipsum suspendisse ultrices gravida. Risus </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>

          </Grid>
        </Grid> */}
        <Grid container px={{ xs: '2em', md: '8em', lg: '8em' }} mb={8}>
          <Grid container spacing={2} md={6} sm={12} xs={12} mb={{ md: 0, sm: 8, xs: 8 }}>
            <Grid item>
              <Reveal>
                <img src={Truck} style={{ backgroundColor: 'white', paddingInline: '1em', paddingBlock: '3em', borderRadius: '2.5em' }}></img>
              </Reveal>
            </Grid>
            <Grid item md sm={12} xs={12} container direction="column" spacing={2} justifyContent={'space-between'}>
              {/* <Grid item xs height={10}>

              </Grid> */}
              <Grid item xs mt={{md:8, sm:0, xs: 0}}>
                <Reveal>
                  <Typography variant='h3' lineHeight={'0.8em'} fontFamily={'Coolvetica'}>Port Delivery</Typography>
                  <Typography variant='h5' lineHeight={'0.8em'}>Manila & Subic</Typography>
                  {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, ipsum suspendisse ultrices gravida. Risus </Typography> */}
                </Reveal>
              </Grid>
              <Grid item>
                <Reveal>
                  <Typography sx={{ cursor: 'pointer' }} variant='h5' fontWeight={'100'}>
                    LEARN MORE
                  </Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={2} md={6} sm={12} xs={12}>
            <Grid item>
              <Reveal>
                <img src={CarRental} style={{ backgroundColor: 'white', paddingInline: '2.5em', paddingBlock: '1.5em', borderRadius: '2.5em' }}></img>
              </Reveal>
            </Grid>
            <Grid item md sm={12} xs={12} container direction="column" spacing={2} justifyContent={'space-between'}>
              <Grid item xs mt={{md:8, sm:0, xs: 0}}>
                <Reveal>
                  <Typography variant='h3' lineHeight={'0.8em'} fontFamily={'Coolvetica'}>Car Rental</Typography>
                  <Typography variant='h5' lineHeight={'0.8em'}>Batangas to Baguio</Typography>
                  {/* <Typography variant='h5' fontWeight={'100'} lineHeight={'1.2em'} mt={3}>Lorem ipsum dolor sit amet, ipsum suspendisse ultrices gravida. Risus </Typography> */}
                </Reveal>
              </Grid>
              <Grid item>
                <Reveal>
                  <Typography sx={{ cursor: 'pointer' }} variant='h5' fontWeight={'100'}>
                    LEARN MORE
                  </Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Reveal>
          <img class="truck-car" src={TruckCar} alt="Truck Car"></img>
        </Reveal>
      </Grid>
    </>
  );
};

export default Section;