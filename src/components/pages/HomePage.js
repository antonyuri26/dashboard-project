import React, { useEffect } from 'react';

import Features from '../homePage/Features';
import HeadingText from '../homePage/Heading';
import Testimonials from '../homePage/Testimonials';
import Pricing from '../homePage/Pricing';
import Statistics from '../homePage/Statistics';
import Footer from '../layout/Footer';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Box, Divider } from '@chakra-ui/react';
import { navActions } from '../../store/index';

import Hero from '../homePage/Hero';

const HomePage = () => {
  const nav = useSelector(state => state.nav.navChange);
  const navId = useSelector(state => state.nav.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nav === true && navId === 'pricing') {
      window.scrollTo({ top: 1650, left: 0, behavior: 'smooth' });
      dispatch(navActions.navChange('reset'));
    }
    if (nav === true && navId === 'features') {
      window.scrollTo({ top: 850, left: 0, behavior: 'smooth' });
      dispatch(navActions.navChange('reset'));
    }
  }, [nav, navId, dispatch]);

  return (
    <>
      <Hero />
      <Box bg={'rgb(247,250,252)'}>
        <HeadingText />
        <Box pb="35">
          <Features />
          <Features />
        </Box>
      </Box>
      <Divider />
      <Pricing />
      <Testimonials />
      <Statistics />
      <Footer />
    </>
  );
};

export default HomePage;
