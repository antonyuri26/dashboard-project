import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
  Heading,
} from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

import digitalImage from '../../images/digital-marketing.jpg';

const BuildDevBox = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '50%' : '100%'}
      minHeight={'15rem'}
      mt="4"
      mb="4"
    >
      <Stack>
        <CardBody>
          <Heading size="md" color="grey">
            Built by Developers
          </Heading>
          <Text size="sm" as="b">
            UI Dashboard
          </Text>

          <Text py="1" fontSize={'md'} color="grey" w={'80%'}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse amet
            labore a consectetur quas suscipit modi.
          </Text>
        </CardBody>
        <CardFooter>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="blue"
            variant="outline"
          >
            Read More
          </Button>
        </CardFooter>
      </Stack>

      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '250px' }}
        src={digitalImage}
        alt="Caffe Latte"
      />
    </Card>
  );
};

export default BuildDevBox;
