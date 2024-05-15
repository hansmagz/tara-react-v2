import React, { useState, useEffect } from 'react';
import LoadingOverlay from '../components/loading';
import Hero from '../components/hero'
import Services from '../components/services'
import Journey from '../components/journey'
import Showcase from '../components/showcase'
import Area from '../components/area'
import Leadership from '../components/leadership'
import Expand from '../components/expand'

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingOverlay open={loading} />
      <Hero></Hero>
      {/* <Why></Why> */}
      {/* <Test></Test> */}
      <Journey></Journey>
      <Showcase></Showcase>
      <Services></Services>
      <Area></Area>
      <Leadership></Leadership>
      {/* <News></News> */}
      <Expand></Expand>
      {/* <Section></Section> */}
      {/* <Sponsors></Sponsors>
      <Ready></Ready>
      <Leader></Leader> */}
    </>
  );
}