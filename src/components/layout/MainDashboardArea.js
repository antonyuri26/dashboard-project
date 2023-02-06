import { Box, Flex } from '@chakra-ui/react';

const MainDashboardArea = props => {
  return (
    // <div style={{ position: 'sticky', display: 'flex' }}>{props.children}</div>
    <Box display="flex" position="sticky" padding="10">
      {props.children}
    </Box>
  );
};

export default MainDashboardArea;
