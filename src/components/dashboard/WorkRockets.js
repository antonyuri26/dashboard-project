import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

import video from '../../images/videocode.mp4';

const WorkRockets = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan820] = useMediaQuery('(min-width: 825px)');
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '50%' : '100%'}
      minHeight="15rem"
      ml="0"
      mt="4"
      mb="4"
      mr={isLargerThan900 ? '4' : '0'}
    >
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      >
        <video
          src={video}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          autoPlay
          muted
          loop
        >
          Your Browser do not support video content!
        </video>
      </div>
      <Stack position={'absolute'}>
        <CardBody px={'5'}>
          <Heading size="lg" color="white">
            Work with the rockets!
          </Heading>
          <Text
            fontSize={isLargerThan480 ? 'lg' : 'md'}
            color="white"
            w={'80%'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            ratione at illo odio, quidem excepturi, error facere necessitatibus.
          </Text>
        </CardBody>
        <CardFooter px={'5'}>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="blue"
              variant="solid"
              mt={isLargerThan820 ? '2.2rem' : '-2rem'}
            >
              Explore More
            </Button>
          </Stack>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default WorkRockets;
