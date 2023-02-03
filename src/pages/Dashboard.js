import { Box } from '@chakra-ui/react';
import MainDashboardArea from '../components/layout/MainDashboardArea';
import MainContent from '../components/layout/MainContent';
// import SideBar1 from '../components/layout/dashboard/SideBar1';
import SideBar1 from '../components/dashboard/SideBar1';

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
