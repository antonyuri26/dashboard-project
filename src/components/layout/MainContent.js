import { Box } from '@chakra-ui/react';

import CardHeaderDash from '../dashboard/CardHeaderDash';
import Container1 from '../dashboard/Container1';
import Container2 from '../dashboard/Container2';
import Container3 from '../dashboard/Container3';
import Container4 from '../dashboard/Container4';
import Container5 from '../dashboard/Container5';
import Container6 from '../dashboard/Container6';
import Container7 from '../dashboard/Container7';
import Footer from '../dashboard/Footer';
import { useMediaQuery } from '@chakra-ui/react';

const MainContent = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Box mt="25" ml="-2">
      <CardHeaderDash />
      <Box display="flex">
        <Container1 />
        {isLargerThan900 ? <Container2 /> : ''}
      </Box>
      <Box display="flex" flexDirection={isLargerThan900 ? 'row' : 'column'}>
        <Container3 />
        <Container4 />
      </Box>
      <Box display="flex" flexDirection={isLargerThan900 ? 'row' : 'column'}>
        <Container5 />
        <Container6 />
        {isLargerThan900 ? <Container7 /> : ''}
      </Box>
      <Footer />
    </Box>
  );
};

export default MainContent;
