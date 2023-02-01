import { Box, Heading } from '@chakra-ui/react';
import MainDashboardArea from '../components/layout/MainDashboardArea';
import MainContent from '../components/layout/MainContent';
import SideBar1 from '../components/layout/dashboard/SideBar1';
import Footer from '../components/layout/dashboard/Footer';

const Dashboard = () => {
  return (
    <>
      <MainDashboardArea>
        <Box display="flex">
          <SideBar1 />
          <MainContent />
        </Box>
        {/* <Footer /> */}
      </MainDashboardArea>
    </>
  );
};

export default Dashboard;
