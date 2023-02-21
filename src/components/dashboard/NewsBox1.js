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

import aiImage from '../../images/ai-image.jpg';

const NewsBox1 = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '35%' : '100%'}
      ml={isLargerThan900 ? '4' : '0'}
      mb="4"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '200px' }}
        src={aiImage}
        alt="AI"
      />

      <Stack>
        <CardBody>
          <Heading size="md" color={'gray'}>
            Artificial Intelligence
          </Heading>

          <Text size="sm" mt={'0.4rem'} as="b">
            UI Dashboard
          </Text>

          <Text py="2" color={'gray'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            dolore quos! Reprehenderit, deleniti! Dolor molestiae dolore quia
            mollitia? Explicabo optio voluptate omnis temporibus! Voluptatibus
            at quidem beatae accusantium, alias earum.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Lear more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default NewsBox1;
