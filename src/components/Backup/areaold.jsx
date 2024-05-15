import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from '../reveal';
import Manila from '../assets/manila.png';
import Subic from '../assets/subic.png';
import TruckFront from '../assets/truck-front.png';
import CarFront from '../assets/car-front.png';
import BatangasBaguio from '../assets/batangas-baguio.png';
import '../styles/styles.css'

const Section = () => {
  const theme = useTheme();

  const isSmScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Grid container
        bgcolor={'#3D3D3D'}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        py={'10em'}
        color={'white'}
      // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center"
      // spacing={4}
      >
        <Grid item md={12} sm={12} xs={12} px={{ xs: '2em', md: '6em', lg: '6em' }} pb={'6em'} textAlign={isSmScreen ? '-webkit-center' : '-webkit-left'}>
          <Reveal>
            <div style={{ border: '4px solid #FFFFFF', borderRadius: '20px', paddingInline: '14px', paddingBlock: '0px' }}>
              <span style={{ fontSize: `${isSmScreen ? '4rem' : '6rem'}`, fontFamily: 'Coolvetica' }}>SERVICED AREAS</span>
            </div>
          </Reveal>
        </Grid>
        <Grid container item md={12} sm={12} xs={12}
          // px={{ xs: '2em', md: '6em', lg: '6em' }}
          mb={'6em'}
          justifyContent={'space-between'}>
          <Grid item>
            <Grid container item>
              <Grid item xs>
                <Reveal>
                  <Typography fontStyle={'italic'} fontWeight={'500'} fontSize={'2em'} sx={{ backgroundColor: '#80FFFF' }} px={2}>PORTS</Typography>
                </Reveal>
              </Grid>
              <Grid item xs mt={4} className='text-center'>
                <Reveal>
                  <img src={Manila} height={isSmScreen ? '350px' : '500px'} style={{ marginTop: `${isSmScreen ? '0' : '3.7em'}`, marginLeft: `${isSmScreen ? '0' : '-4em'}`, marginBottom: `${isSmScreen ? '4em' : '0'}` }}></img>
                </Reveal>
              </Grid>
              <Grid item xs className='text-center'>
                <Reveal>
                  <img src={Subic} height={isSmScreen ? '350px' : '500px'} style={{ marginTop: '0.2em' }}></img>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ overflowX: 'clip' }}>
            <Reveal>
              <img src={TruckFront} height={600} style={{ marginTop: `${isSmScreen ? '0' : '-15em'}`, marginRight: `${isSmScreen ? '0' : '-10em'}` }}></img>
            </Reveal>
          </Grid>
        </Grid>
        <Grid container item md={12} sm={12} xs={12}
          // px={{ xs: '2em', md: '6em', lg: '6em' }}
          justifyContent={'space-between'}
          textAlign={'-webkit-right'}>
          <Grid item sx={{ overflowX: 'clip' }} order={{ xs: 2, md: 1 }}>
            <Reveal>
              <img src={CarFront} height={600} style={{ marginTop: `${isSmScreen ? '0' : '5em'}`, marginLeft: `${isSmScreen ? '-18em' : '-10em'}` }}></img>
            </Reveal>
          </Grid>
          <Grid item order={{ xs: 1, md: 2 }}>
            <Grid container item>
              <Grid item xs={12} sm={12} md={12}>
                <Reveal>
                  <Typography fontStyle={'italic'} fontWeight={'500'} color={'#80FFFF'} fontSize={'2em'} sx={{ backgroundColor: '#FFFFFF' }} px={2}>CAR RENTAL</Typography>
                </Reveal>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <Reveal>
                  <img className='responsive-image' width={1200} src={BatangasBaguio} style={{ marginTop: `${isSmScreen ? '4em' : '7em'}`, marginRight: `${isSmScreen ? '0' : '0em'}` }}></img>
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