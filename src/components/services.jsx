import React from 'react';
import { Grid, Typography, Stack, Box, Container, Button, Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Reveal from './reveal';
import City from '../assets/City.jpg';
import Traffic from '../assets/Traffic.jpg';
import Service1 from '../assets/SERVICES1.jpg';
import Service2 from '../assets/SERVICES2.jpg';
import Service3 from '../assets/SERVICES3.jpg';
import Static from '../assets/static_bg.webp';
import GradientCircle from '../assets/BlurredCircle.png';

import '../styles/styles.css'

const Page = () => {
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down('sm'));

  const Title = styled(Typography)(({ theme }) => ({
    textAlign: 'right',
    fontWeight: 900,
    fontFamily: 'Archive',
    lineHeight: '0.8em'
  }));

  const BlurredCircle = styled(Box)(({ theme }) => ({
    // width: '100%',
    height: '100%',
    aspectRatio: '1/1',
    backgroundColor: '#80FFFF',
    opacity: '50%',
    borderRadius: '50%',
    filter: 'blur(100px)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }));

  const BlurredCirclePic = styled(Box)(({ theme }) => ({
    // width: '100%',
    background: `url(${GradientCircle}) no-repeat center/contain`,
    height: '100%',
    aspectRatio: '1/1',
    // backgroundColor: '#80FFFF',
    // opacity: '50%',
    // borderRadius: '50%',
    // filter: 'blur(100px)',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }));

  const StaticOverlay = styled(Box)(({ theme }) => ({
    height: '100%',
    width: '100%',
    // aspectRatio: '1/1',
    opacity: '0.2',
    backgroundImage: `url(${Static})`,
    mixBlendMode: 'overlay',
    zIndex: 1,
    position: 'absolute',
    left: '0',
    top: '0'
    // top: '-10em',
    // transform: 'translate(-50%, -50%)'
  }));

  var items = [
    {
      name: "Car Rental",
      picture: Service1,
      position: 'center'
    },
    {
      name: "Port Delivery",
      picture: Service2,
      position: 'center'
    },
    {
      name: "Ride Hailing",
      picture: Service3,
      position: 'center'
    }
  ]

  return (
    <>
      <Box bgcolor={'#000'} width={'100%'} color={'#FFF'} py={'16em'} position={'relative'}>
        <StaticOverlay></StaticOverlay>
        <BlurredCirclePic display={phoneView ? 'block' : 'none'}></BlurredCirclePic>
        <Container sx={{ position: 'relative' }}>
          <BlurredCircle display={phoneView ? 'none' : 'block'} className={phoneView ? '' : 'color-animate'}></BlurredCircle>
          <Grid container>
            <Grid item zIndex={1} md={4} sm={12} xs={12} pr={{ md: 2, sm: 0, xs: 0 }} pb={{ md: 0, sm: 2, xs: 2 }} textAlign={'right'}>
              <Box pb={2}>
                <Reveal width='100%'>
                  <img src={City} width={phoneView ? '100%' : '69%'} style={{ aspectRatio: '1/1' }}></img>
                </Reveal>
              </Box>
              <Box>
                <Reveal width='100%'>
                  <img src={Traffic} width={phoneView ? '100%' : '69%'} style={{ aspectRatio: '16/9' }}></img>
                </Reveal>
              </Box>
              <Box mt={phoneView ? 4 : 2}>
                <Reveal width='100%'>
                  <Title variant='h3' color={theme.palette.blackbg.text}>OUR<br />SERVICES</Title>
                </Reveal>
              </Box>
            </Grid>
            <Grid item zIndex={1} md={8} sm={12} xs={12} alignContent={'center'}>
              {/* <Box pb={2} display={phoneView ? 'block' : 'none'}>
                <Reveal width='100%'>
                  <Title variant='h3'>OUR<br />SERVICES</Title>
                </Reveal>
              </Box> */}
              <Carousel autoPlay={'true'}>
                {
                  items.map((item, i) => <Item key={i} item={item} />)
                }
              </Carousel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

function Item(props) {
  return (
    <img src={props.item.picture} width={'100%'} style={{ aspectRatio: '1.5/1' }}></img>
    // <Paper sx={{ backgroundImage: `url(${props.item.picture})`, backgroundSize: 'contain', backgroundPosition: props.item.position, backgroundRepeat: 'no-repeat', backgroundColor:'transparent' }}>
    //   {/* <Grid container md={12} sm={12} xs={12} height={'100%'} alignItems="center" justifyContent="center">
    //     <Grid item p={1.5} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
    //       <Typography variant="h3" color={'white'}>{props.item.name}</Typography>
    //     </Grid>
    //   </Grid> */}
    //   {/* <p>{props.item.description}</p>

    //   <Button className="CheckButton">
    //     Check it out!
    //   </Button> */}
    // </Paper>
  )
}

export default Page;