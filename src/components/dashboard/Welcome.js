import { Heading, Text, Flex, Box } from '@chakra-ui/layout';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import {
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineNotification,
} from 'react-icons/ai';

import { useMediaQuery } from '@chakra-ui/react';

const Welcome = () => {
  const [isLargerThan650] = useMediaQuery('(min-width: 650px)');
  return (
    <Flex
      justifyContent={'space-between'}
      mt={'-1rem'}
      mb={'1rem'}
      flexDir={isLargerThan650 ? 'row' : 'column'}
      alignItems={isLargerThan650 ? '' : 'center'}
    >
      <Box>
        <Heading size={'md'}>Welcome to your Dashboard</Heading>
        <Text fontSize={'md'} color={'gray'}>
          Hello Antonio, Welcome back!
        </Text>
      </Box>
      <InputGroup w={isLargerThan650 ? '25%' : '65%'}>
        <InputLeftElement
          pointerEvents="none"
          children={<AiOutlineSearch color="gray.300" />}
        />
        <Input type="tel" placeholder="Search here" />
      </InputGroup>
      {isLargerThan650 ? (
        <Box display={'flex'}>
          <AiOutlineMessage size={'1.8rem'} cursor="pointer" />
          <AiOutlineNotification size={'1.8rem'} cursor="pointer" />
        </Box>
      ) : (
        ''
      )}
    </Flex>
  );
};

export default Welcome;
