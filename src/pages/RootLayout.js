import WithSubnavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const RootLayout = () => {
  return (
    <Box
      maxW="70%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin="auto"
    >
      <WithSubnavigation />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
