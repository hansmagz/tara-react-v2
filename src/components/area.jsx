import React from 'react';
import { Typography, Stack, Box, Container, Button, Paper } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Carousel from 'react-material-ui-carousel'
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from './reveal';
import Manila from '../assets/manila.jpg';
import Subic from '../assets/subic.jpg';
import Traffic from '../assets/traffic2.jpg';
import Static from '../assets/static_bg.webp';
import Ocean from '../assets/Ocean.jpg';
import Boat from '../assets/Boat.png';
import Sailboat from '../assets/Sailboat.png';

import '../styles/styles.css'

const Page = () => {
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

  const Title = styled(Typography)(({ theme }) => ({
    fontWeight: 900,
    fontFamily: 'Archive',
    lineHeight: '0.8em',
    color: theme.palette.primary.main
  }));

  const ContentTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 900,
    fontStyle: 'italic',
  }));

  const ContentSubtitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'NeueMachina',
    color: theme.palette.primary.main
  }));

  const BlurredCircle = styled(Box)(({ theme }) => ({
    height: '60%',
    backgroundColor: '#80FFFF',
    aspectRatio: '1/1',
    opacity: '30%',
    borderRadius: '50%',
    filter: 'blur(100px)',
    position: 'absolute',
    left: '14%',
    top: '10%',
    transform: 'translate(-50%, -50%)'
  }));

  const StaticOverlay = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    opacity: '0.2',
    backgroundImage: `url(${Static})`,
    mixBlendMode: 'overlay',
    zIndex: 1,
    position: 'absolute',
    left: '0',
    top: '0'
  }));

  return (
    <>
      <Box bgcolor={'#000'} width={'100%'} color={'#FFF'} py={'16em'} position={'relative'}>
        <StaticOverlay></StaticOverlay>
        <Container sx={{ position: 'relative' }}>
          <BlurredCircle className={phoneView ? '' : 'color-blink'}></BlurredCircle>
          <Grid container>
            <Grid item md={12} sm={12} xs={12} mb={phoneView ? 4 : 0}>
              <Reveal width='100%'>
                <Title variant='h1'>AREAS</Title>
              </Reveal>
            </Grid>
            <Grid item zIndex={1} md={6} mdOffset={2} sm={12} xs={12} mb={phoneView ? 4 : 0}>
              <Box display={'flex'} alignItems={'end'}>
                <ContentTitle variant='h3' mr={2} color={theme.palette.blackbg.text}>PORTS</ContentTitle>
                <Reveal>
                  <img src={Manila} width={'100%'} style={{ aspectRatio: '1/1' }}></img>
                </Reveal>
              </Box>
              <Box>
                <ContentSubtitle variant='h4' mb={1} mr={2} lineHeight={'2rem'}>MANILA & SUBIC</ContentSubtitle>
                <Reveal>
                  <img src={Subic} width={'50%'} style={{ aspectRatio: '1/1' }}></img>
                </Reveal>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12} alignContent={'center'} ml={phoneView ? '0' : '-2em'}>
              <Reveal>
                <img src={Traffic} width={'90%'} style={{ aspectRatio: '1/1' }}></img>
              </Reveal>
              <ContentTitle variant='h3' mr={2} color={theme.palette.blackbg.text}>CAR RENTAL</ContentTitle>
              <ContentSubtitle variant='h4' mr={2} lineHeight={'2rem'}>BATANGAS to BAGUIO</ContentSubtitle>
            </Grid>
          </Grid>
        </Container>
        <Box
          position={'absolute'}
          zIndex={1}
          left={'0px'}
          bottom={'0px'}
          height={'182px'}
          width={'100%'}
          sx={{ background: `url(${Ocean}) repeat-x bottom/contain` }}
        ></Box>
        <Box
          position={'absolute'}
          zIndex={1}
          left={'9svw'}
          bottom={phoneView ? '8%' : '11%'}
          sx={{
            background: `url(${Boat}) no-repeat center/contain`,
            width: phoneView ? '36%' : '20svw',
            aspectRatio: '1.5152/1'
          }}
        ></Box>
        <Box
          position={'absolute'}
          zIndex={1}
          right={'10svw'}
          bottom={phoneView ? '8%' : '11%'}
          sx={{
            background: `url(${Sailboat}) no-repeat center/contain`,
            width: phoneView ? '16%' : '8svw',
            aspectRatio: '0.7937/1'
          }}
        ></Box>
      </Box>
    </>
  );
};

export default Page;