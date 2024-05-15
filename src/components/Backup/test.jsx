import React from 'react';
import { Grid, Typography, Stack, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Static from '../assets/static_bg.png';
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
        bgcolor={'#080707'}
        // sx={{ backgroundImage: `url(${Slant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        px={{ xs: '0', sm: '0', md: '10em', lg: '26em' }}
        py={'18em'}
        // color={'white'}
      // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
      // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
      // justifyContent="space-between"
      // alignItems="center";
      // spacing={4}
      >
        <Grid item md={12}>
          <Box textAlign={'center'} borderRadius={'10px'} py={12} px={isSmScreen ? 3 : 6} sx={{backgroundImage: `url(${Static})`, backgroundSize:'128px auto', backgroundRepeat:'repeat', backgroundPosition:'left top'}}>
            <Reveal>
              <span style={{ fontSize: '2rem', fontFamily: 'Coolvetica', border: '2px solid #80FFFF', borderRadius: '10px', paddingInline: '40px', paddingBlock: '6px' }}>About Us</span>
              <Typography fontSize={20} mt={4} textAlign={'justify'}>Tara is your go-to destination for seamless transportation solutions in the Philippines. From logistics to rent-a-car services, we're dedicated to making your travel experience smooth, efficient, and enjoyable. Whether you're commuting daily or exploring new destinations, Tara is here to simplify your journey. Welcome to a new era of transportation with Tara.</Typography>
            </Reveal>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Section;