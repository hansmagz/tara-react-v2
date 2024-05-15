import React from 'react';
import { Grid, Typography } from '@mui/material';
import Reveal from '../components/reveal';
import '../styles/styles.css'

const About = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        // bgcolor={'#323332'}
        px={{ xs: '2em', md: '10em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Our Story</Typography>
            <Typography variant="h6" color={'#80FFFF'}>TARA, which means "let's go," is an online mobile and web transportation application. It was founded by Marc Bundalian, an agency owner of an online streaming application that operates in the Philippines, United States, and Canada. Marc used to rent out his personal SUV on an app and thought of bringing the same idea to the Philippines, allowing car owners to rent out their vehicles to potential clients using a mobile app. He then contacted his friend and now co-founder Bjorn, who is a software engineer, motorcycle enthusiast, and owner of car and house rentals. They established a company in the United States and later took steps to bring it to the Philippines. They met Edgar, a trailer truck operator and cargo logistics manager, who came up with the idea to incorporate shipment truck rentals, making the app a true "Super App." Two more incorporators were invited to be part of the company, one of whom is a business owner in both the US and the Philippines. They also added another incorporator who had previous experience in various IT companies in the Philippines. Together with former 8-time World Champion boxer Emmanuel "Pacman" Pacquiao, they all brainstormed and built the super app "TARA."</Typography>
          </Reveal>
        </Grid> */}
        {/* <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Leadership</Typography>
            <Typography variant="h6" color={'#80FFFF'}>Meet the visionaries behind the Tara app – our dynamic founders who sparked the idea, fueled the innovation and steered us toward revolutionizing transportation. With a blend of expertise in technology, business, and a shared passion for enhancing user experiences, they've crafted a platform that seamlessly connects you to the future of mobility. Tara sa pagunlad ng transportasyon!</Typography>
          </Reveal>
        </Grid> */}
        <Grid item md={9} mb={12}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Mission</Typography>
            <Typography variant="h6" color={'#80FFFF'}>Our mission to help people go anywhere. It pushes us to constantly reimagine how we can move better for the Philippines. We help people reach their destination from start to finish</Typography>
          </Reveal>
        </Grid>
        <Grid item md={9}>
          <Reveal>
            <Typography variant="h2" fontWeight={700} color={'white'} mb={4}>Vision</Typography>
            <Typography variant="h6" color={'#80FFFF'}>Becoming the All-In-One Transportation app for the Philippines</Typography>
          </Reveal>
        </Grid>
      </Grid>
    </>
  );
};

export default About;