import React from 'react';
import { Heading } from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';

const HeadingText = () => {
  return (
    <>
      <Divider orientation="horizontal" mt="2rem" />
      <Heading textAlign="center" marginY="3rem" id="features" mt={20}>
        Features
      </Heading>
    </>
  );
};

export default HeadingText;
