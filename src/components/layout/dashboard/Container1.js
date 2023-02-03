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

const Container1 = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="49.5%"
      mt="4"
      mb="4"
    >
      <Stack>
        <CardBody>
          <Text fontSize={'14'} color="grey" as="b">
            Built by Developers
          </Text>
          <Heading size="sm">Purity UI Dashboard</Heading>

          <Text py="2" fontSize={'14'} color="grey">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
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
        maxW={{ base: '100%', sm: '200px' }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
    </Card>
  );
};

export default Container1;
