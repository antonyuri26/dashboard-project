import { Box } from '@chakra-ui/react';
import CardHeaderDash from './dashboard/CardHeaderDash';
import Container1 from './dashboard/Container1';
import Container2 from './dashboard/Container2';
import Container3 from './dashboard/Container3';
import Container4 from './dashboard/Container4';
import Container5 from './dashboard/Container5';
import Container6 from './dashboard/Container6';
import Footer from './dashboard/Footer';

const MainContent = () => {
  return (
    <Box mt="25" ml="-2">
      <CardHeaderDash />
      <Box display="flex">
        <Container1 />
        <Container2 />
      </Box>
      <Box display="flex">
        <Container3 />
        <Container4 />
      </Box>
      <Box display="flex">
        <Container5 />
        <Container6 />
      </Box>
      <Footer />
    </Box>
  );
};

export default MainContent;
