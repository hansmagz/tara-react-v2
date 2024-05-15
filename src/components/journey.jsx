import React from 'react';
import { Grid, Typography, Stack, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from './reveal';
import Highway from '../assets/highway.png';
import Driving from '../assets/driving.png';
import Hatchback from '../assets/Hatchback.jpg';
import Sedan from '../assets/Sedan.jpg';
import SUV from '../assets/SUV.jpg';
import Coupe from '../assets/Coupe.jpg';
import Convertible from '../assets/Convertible.jpg';
import StationWagon from '../assets/Station-wagon.jpg';
import SportsCar from '../assets/Sports-car.jpg';
import Crossover from '../assets/Crossover.jpg';
import ElectricCar from '../assets/Electric-car.jpg';
import LuxuryCar from '../assets/Luxury-car.jpg';
import '../styles/styles.css'
import '../styles/fonts.css';
import Marquee from "react-fast-marquee";

const Section = () => {
  const theme = useTheme();

  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

  const car_types = [
    { picture: Sedan, label: 'Sedan' },
    { picture: SUV, label: 'SUV' },
    { picture: Coupe, label: 'Coupe' },
    { picture: Convertible, label: 'Convertible' },
    { picture: StationWagon, label: 'Station Wagon' },
    { picture: SportsCar, label: 'Sports Car' },
    { picture: Crossover, label: 'Crossover' },
    { picture: ElectricCar, label: 'Electric Car' },
    { picture: LuxuryCar, label: 'Luxury Car' },
  ];

  return (
    <>
      <Grid container
        bgcolor={'#EAEAEA'}
        // sx={{ backgroundImage: `url(${Slant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        py={'10em'}
        color={'black'}
      // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center";
      // spacing={4}
      >
        <Container>
          <Grid container>
            <Grid item md={6} sm={12} xs={12}>
              <Reveal>
                <Typography variant='h2' className='journey-tagline' color={theme.palette.whitebg.text}>DISCOVER YOUR</Typography>
                <Typography variant='h2' className='journey-tagline-subtitle' color={theme.palette.whitebg.text}>JOURNEY
                  <Box height={'12px'} width={'12px'} mx={1} sx={{ backgroundColor: theme.palette.whitebg.text }}></Box>
                  <Box height={'10px'} width={'10px'} borderRadius={'60px'} sx={{ backgroundColor: theme.palette.whitebg.text }}></Box>
                  <Box height={'3px'} width={'30px'} sx={{ backgroundColor: theme.palette.whitebg.text }}></Box>
                  <Box height={'10px'} width={'10px'} borderRadius={'60px'} sx={{ backgroundColor: theme.palette.whitebg.text }}></Box>
                </Typography>
              </Reveal>
            </Grid>
            <Grid item md={6} sm={12} xs={12} textAlign={'-webkit-right'} position={'relative'}>
              <Reveal delay={0.4} width={'100%'}>
                <Box height={'6px'} width={'100%'} mx={1} sx={{ backgroundColor: theme.palette.whitebg.text }}></Box>
              </Reveal>
              <Reveal delay={0.5} width={'100%'}>
                <Box width={'80%'} sx={{ background: `url(${Highway}) no-repeat center/cover`, aspectRatio: '1.194/1' }}></Box>
              </Reveal>
              <Reveal width={'100%'}>
                <Box>
                  <Typography variant='h6' textAlign={'left'} className='journey-subtitle' left={'40%'} bottom={'10px'} color={theme.palette.blackbg.text} sx={{verticalAlign:'bottom'}}>“ALL-IN-ONE<br />TRANSPORT APP”</Typography>
                </Box>
              </Reveal>
              <Reveal width={'100%'}>
                <Box>
                  <Typography variant='h6' textAlign={'left'} className='journey-subtitle' left={'40%'} top={'102%'} color={theme.palette.whitebg.text}>Expanding soon to<br />Cebu, Davao &<br />Gensan</Typography>
                </Box>
              </Reveal>
              <Reveal delay={0.5} width={'100%'}>
                <Box height={'76%'} boxShadow={'-10px 10px 6px rgba(0,0,0,0.5)'} sx={{ background: `url(${Driving}) no-repeat center/cover`, aspectRatio: '0.717/1' }} className='journey-image2'></Box>
              </Reveal>

            </Grid>
          </Grid>
          <Reveal>
            <Typography mt={phoneView ? 22 : 10} ml={2} variant='h4' className='vehicles-title' color={theme.palette.whitebg.text}>Rent vehicles from<br />reliable, nearby hosts.</Typography>
            <Box mt={-1} height={'20px'} width={'280px'} backgroundColor={theme.palette.primary.main}></Box>
          </Reveal>
          <Reveal delay={0.5}>
            <Box height={'6px'} width={'80px'} backgroundColor='black'></Box>
          </Reveal>
        </Container>
        <Grid item mt={6} md={12} sm={12} xs={12}>
          <Marquee autoFill={'true'} pauseOnClick={'false'} speed={100}>
            {car_types.map((car_type) => (
              <Box my={2} boxShadow={'-6px 6px 2px rgba(0,0,0,0.8)'} textAlign={'center'} style={{ marginRight: '4em' }}>
                <img src={car_type.picture} height={'200px'}></img>
                <Typography variant='h6' color={theme.palette.whitebg.text}>{car_type.label}</Typography>
              </Box>
            ))}
          </Marquee>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;