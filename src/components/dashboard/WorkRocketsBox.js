import { Heading } from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';

import { ArrowForwardIcon } from '@chakra-ui/icons';

const WorkRocketsBox = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="50%"
      ml="4"
      mt="4"
      mb="4"
      backgroundImage={
        'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
      }
    >
      <Stack position={'absolute'}>
        <CardBody p={'8'}>
          <Heading size="sm" color="white">
            Work With The Rockets
          </Heading>

          <Text py="2" fontSize={'14'} color="white" as="b">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="whiteAlpha"
            variant="outline"
          >
            Call Us
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default WorkRocketsBox;
