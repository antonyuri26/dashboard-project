import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

const RootLayout = props => {
  return (
    <Box
      maxW="70%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin="auto"
    >
      <MainNavigation navPageChangeHandler={props.navPageChangeHandler} />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
