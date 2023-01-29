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

const HomePage = () => {
  return (
    <>
      {/* <SplitScreen /> */}
      {/* <WithBackgroundImage /> */}
      <CallToActionWithIllustration />
      <HeadingText />
      <SimpleThreeColumns />
      <SimpleThreeColumns />
      <WithSpeechBubbles />
      <ThreeTierPricing />
      <BasicStatistics />
      <LargeWithLogoLeft />
    </>
  );
};

export default HomePage;
