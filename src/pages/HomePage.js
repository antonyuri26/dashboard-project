import React, { useEffect } from 'react';
import SimpleThreeColumns from '../components/Features';
import HeadingText from '../components/Heading';
import WithSpeechBubbles from '../components/Testimonials';
import ThreeTierPricing from '../components/Pricing';
import BasicStatistics from '../components/Statistics';
import LargeWithLogoLeft from '../components/Footer';
import CallToActionWithIllustration from '../components/Hero2';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import { navActions } from '../store';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const isAuth1 = useSelector(state => state.auth.isAuthenticated);
  const nav = useSelector(state => state.nav.navChange);
  const navId = useSelector(state => state.nav.id);
  const dispatch = useDispatch();

  useEffect(() => {
    if (nav === true && navId === 'pricing') {
      window.scrollTo({ top: 1700, left: 0, behavior: 'smooth' });
      dispatch(navActions.navChange('reset'));
    }
    if (nav === true && navId === 'features') {
      window.scrollTo({ top: 1000, left: 0, behavior: 'smooth' });
      dispatch(navActions.navChange('reset'));
    }
  }, [nav]);

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
