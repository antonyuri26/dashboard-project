import React from 'react';
import SplitScreen from '../components/Hero';
import SimpleThreeColumns from '../components/Features';
import HeadingText from '../components/Heading';
import WithSpeechBubbles from '../components/Testimonials';
import ThreeTierPricing from '../components/Pricing';
import BasicStatistics from '../components/Statistics';
import LargeWithLogoLeft from '../components/Footer';
import WithBackgroundImage from '../components/Hero1';
import CallToActionWithIllustration from '../components/Hero2';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';

const HomePage = () => {
  const isAuth1 = useSelector(state => state.auth.isAuthenticated);

  return (
    <>
      {/* <SplitScreen /> */}
      {/* <WithBackgroundImage /> */}
      {isAuth1 ? (
        <Dashboard />
      ) : (
        <div>
          <CallToActionWithIllustration />
          <HeadingText />
          <SimpleThreeColumns />
          <SimpleThreeColumns />
          <ThreeTierPricing />
          <WithSpeechBubbles />
          <BasicStatistics />
          <LargeWithLogoLeft />
        </div>
      )}
    </>
  );
};

export default HomePage;
