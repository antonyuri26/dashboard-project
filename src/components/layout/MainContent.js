import { Box } from '@chakra-ui/react';

import CardHeaderDash from '../dashboard/CardHeaderDash';
import BuildByDevsBox from '../dashboard/BuildByDevsBox';
import WorkRocketsBox from '../dashboard/WorkRocketsBox';
import CandleGraphBox from '../dashboard/CandleGraphBox';
import BarGraphBox from '../dashboard/BarGraphBox';
import CompaniesBox from '../dashboard/CompaniesBox';
import NewsBox1 from '../dashboard/NewsBox1';
import NewsBox2 from '../dashboard/NewsBox2';
import Footer from './Footer';
import { useMediaQuery } from '@chakra-ui/react';

const MainContent = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Box mt="25" ml="-2">
      <CardHeaderDash />
      <Box display="flex">
        <BuildByDevsBox />
        {isLargerThan900 ? <WorkRocketsBox /> : ''}
      </Box>
      <Box display="flex" flexDirection={isLargerThan900 ? 'row' : 'column'}>
        <CandleGraphBox />
        <BarGraphBox />
      </Box>
      <Box display="flex" flexDirection={isLargerThan900 ? 'row' : 'column'}>
        <CompaniesBox />
        <NewsBox1 />
        {isLargerThan900 ? <NewsBox2 /> : ''}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainContent;
