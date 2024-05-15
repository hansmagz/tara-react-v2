import React from 'react';
import { Grid, Typography } from '@mui/material';
import Reveal from '../reveal';
import Command from '../assets/command.svg';
import ShoppingCart from '../assets/shopping_cart.svg';
import TruckTransport from '../assets/truck_transport.svg';
import Archive from '../assets/archive.svg';
import '../styles/styles.css'

const Section = () => {
  return (
    <>
      <Grid container
        // style={{ marginTop: '4em', marginBottom: '4em' }}
        bgcolor={'#80FFFF'}
        px={{ xs: '2em', md: '10em', lg: '20em' }}
        // spacing={4}
        py={'10em'}
        justifyContent="space-between"
        // alignItems="center"
        spacing={4}
      >
        <Grid item md={4}>
          <Reveal>
            <Typography variant="h4" fontWeight={700}>
              Advantages
            </Typography>
            <Typography variant="h6">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
            </Typography>
          </Reveal>
        </Grid>
        <Grid container item md={8} spacing={4}>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={2}>
                <Reveal>
                  <img src={Command} height={'50px'}></img>
                </Reveal>
              </Grid>
              <Grid item md={10}>
                <Reveal>
                  <Typography variant="h5" fontWeight={700}>
                    Advantage 1
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
                  </Typography>

                </Reveal>
              </Grid>
            </Grid>
            {/* <div class="custom-card">
              <div class="custom-card-container">

              </div>
            </div> */}
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={2}>
                <Reveal>
                  <img src={ShoppingCart} height={'50px'}></img>
                </Reveal>
              </Grid>
              <Grid item md={10}>
                <Reveal>
                  <Typography variant="h5" fontWeight={700}>
                    Advantage 2
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
                  </Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={2}>
                <Reveal>
                  <img src={TruckTransport} height={'50px'}></img>
                </Reveal>
              </Grid>
              <Grid item md={10}>
                <Reveal>
                  <Typography variant="h5" fontWeight={700}>
                    Advantage 3
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
                  </Typography>
                </Reveal>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid container>
              <Grid item md={2}>
                <Reveal>
                  <img src={Archive} height={'50px'}></img>
                </Reveal>
              </Grid>
              <Grid item md={10}>
                <Reveal>
                  <Typography variant="h5" fontWeight={700}>
                    Advantage 4
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dui blandit eu pretium gravida habitasse litora metus aliquam vehicula.
                  </Typography>
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