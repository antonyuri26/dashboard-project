import React, { useEffect } from 'react';
import SimpleThreeColumns from '../homePage/Features';
import HeadingText from '../homePage/Heading';
import WithSpeechBubbles from '../homePage/Testimonials';
import ThreeTierPricing from '../homePage/Pricing';
import BasicStatistics from '../homePage/Statistics';
import LargeWithLogoLeft from '../layout/Footer';
import CallToActionWithIllustration from '../homePage/Hero2';
import { useSelector } from 'react-redux';

import { navActions } from '../../store/index';
import { useDispatch } from 'react-redux';
import { Box, Divider } from '@chakra-ui/react';

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
    <div>
      {/* <Dashboard /> */}
      <CallToActionWithIllustration />
      <Box bg={'rgb(247,250,252)'}>
        <HeadingText />
        <Box pb="35">
          <SimpleThreeColumns />
          <SimpleThreeColumns />
        </Box>
      </Box>
      <Divider />
      <ThreeTierPricing />
      <WithSpeechBubbles />
      <BasicStatistics />
      <LargeWithLogoLeft />
    </div>
  );
};

export default HomePage;
