import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box textAlign="left" py="2" mb="5">
      <Text as="h6" size="xs" color="grey">
        &copy; 2023, Made by Antonio Souza
      </Text>
    </Box>
  );
};

export default Footer;
