import React from 'react';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from '../components/header'
import Footer from '../components/footer'
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function root() {
    return (
        <Grid container sx={{ overflowX: 'hidden' }}>
            <Header></Header>
            <Grid container item justifyContent="center">
                <Outlet />
            </Grid>
            <Grid container item>
                <Footer></Footer>
            </Grid>
        </Grid>
    );
}
export default root;