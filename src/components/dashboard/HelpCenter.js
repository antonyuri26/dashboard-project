import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';

const HelpCenter = () => {
  return (
    <Flex
      bg={'#3182ce'}
      w={'90%'}
      h={'25%'}
      flexDir={'column'}
      alignItems={'center'}
      mt={'3rem'}
      ml={'0.8rem'}
      borderRadius={'8px'}
      position={'relative'}
    >
      <Box
        w={'20%'}
        h={'20%'}
        borderRadius={'100%'}
        bg={'white'}
        position={'absolute'}
        top={'-30px'}
      ></Box>
      <Heading color={'white'} size={'lg'} mt={'2rem'}>
        Heading
      </Heading>
      <Text color={'white'} fontSize={'sm'} textAlign={'center'} mt={'1rem'}>
        Having trouble with your dashboard, please contac us.
      </Text>
      <Button colorScheme="gray" mt={'2rem'}>
        Go to help center
      </Button>
    </Flex>
  );
};

export default HelpCenter;
