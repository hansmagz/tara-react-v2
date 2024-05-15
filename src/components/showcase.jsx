import React, { useState, useEffect } from 'react';
import { Grid, Typography, Stack, Box, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from './reveal';
import Outing from '../assets/outing.jpg';
import Trees from '../assets/Trees.png';
import Logo from '../assets/Logo.png';
import '../styles/styles.css'
import '../styles/fonts.css';

const Section = () => {
  const theme = useTheme();

  const [scrolled, setScrolling] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(window.scrollY / 500);
        // console.log(window.scrollY / 500);
      } else {
        setScrolling(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const treesScroll = (scrolled * 20) - 78;

  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <>
      <Grid container
        bgcolor={'#EAEAEA'}
        // sx={{ backgroundImage: `url(${Slant})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}
        // px={{ xs: '2em', md: '10em', lg: '20em' }}
        pt={'4em'}
        pb={'12em'}
        // sx={{backgroundImage:`url(${TruckCar})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'bottom'}}
        // sx={{background:`url(${TruckCar}) center bottom / 40% auto no-repeat`}}
        // justifyContent="space-between"
        // alignItems="center";
        // spacing={4}
        position={'relative'}
      >
        <Container sx={{ mb: '-4em', zIndex: '1' }}>
          <Grid container>
            <Grid item md={12} sm={12} xs={12} className='text-center' position={'relative'}>
              <Reveal width={'100%'}>
                <Box width={phoneView ? '90%' : '80%'} boxShadow={'-10px 10px 1px rgba(0,0,0,0.6)'} sx={{ background: `url(${Outing}) no-repeat center/cover`, aspectRatio: 4/3 }}></Box>
              </Reveal>
              <Box className='showcase-box' padding={phoneView ? '1em' : '2em'} position={phoneView ? 'block' : 'absolute'} mt={phoneView ? '2em' : '0'} width={phoneView ? '100%' : '40%'}>
                <Stack direction={'row'} spacing={'2em'}>
                  {/* <Typography className='showcase-title'>Tara</Typography> */}
                  <img src={Logo} style={{height:'4em', aspectRatio:'1.7007/1'}}></img>
                  <Typography className='showcase-subtitle' color={'#F2F2F2'}>your go-to destination for seamless transportation solutions in the Philippines. From logistics to rent-a-car services, we're dedicated to making your travel experience smooth, efficient, and enjoyable.</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box width={'100%'} position={'absolute'} left={'0px'} bottom={'0px'}>
          <Box height={'182px'} width={phoneView ? '200%' : '100%'} sx={{ background: `url(${Trees}) no-repeat bottom/contain` }}></Box>
          <Box height={`${treesScroll}em`} width={'100%'} sx={{ backgroundColor: 'black' }}></Box>
        </Box>
      </Grid>
    </>
  );
};

export default Section;