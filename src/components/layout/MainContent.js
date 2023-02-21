import { Box } from '@chakra-ui/react';

import CardHeaderDash from '../dashboard/CardHeaderDash';
import BuildDevBox from '../dashboard/BuildDevBox';
import WorkRockets from '../dashboard/WorkRockets';
import CandleChart from '../dashboard/CandleChart';
import BarChart from '../dashboard/BarChart';
import CompaniesBox from '../dashboard/CompaniesBox';
import NewsBox1 from '../dashboard/NewsBox1';
import NewsBox2 from '../dashboard/NewsBox2';
import Footer from './Footer';
import Welcome from '../dashboard/Welcome';

import { useMediaQuery } from '@chakra-ui/react';

const MainContent = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Box mt="25" ml="-2">
      <Welcome />
      <CardHeaderDash />
      <Box display="flex">
        <WorkRockets />
        {isLargerThan900 ? <BuildDevBox /> : ''}
      </Box>
      <Box display="flex" flexDirection={isLargerThan900 ? 'row' : 'column'}>
        <CandleChart />
        <BarChart />
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
