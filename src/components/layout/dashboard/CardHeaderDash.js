import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';

const CardHeaderDash = () => {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      alignItems="center"
    >
      <Card align="flex-start">
        <CardHeader pt="2" pb="0">
          <Heading size="xs" color="grey">
            Today's Money
          </Heading>
        </CardHeader>
        <CardBody pt="0" pb="2">
          <Text fontSize="sm" as="b">
            $53,000
          </Text>
        </CardBody>
      </Card>
      <Card align="flex-start">
        <CardHeader pt="2" pb="0">
          <Heading size="xs" color="grey">
            Today's Users
          </Heading>
        </CardHeader>
        <CardBody pt="0" pb="2">
          <Text fontSize="sm" as="b">
            2,300
          </Text>
        </CardBody>
      </Card>
      <Card align="flex-start">
        <CardHeader pt="2" pb="0">
          <Heading size="xs" color="grey">
            New Clients
          </Heading>
        </CardHeader>
        <CardBody pt="0" pb="2">
          <Text fontSize="sm" as="b">
            +3,020
          </Text>
        </CardBody>
      </Card>
      <Card align="flex-start">
        <CardHeader pt="2" pb="0">
          <Heading size="xs" color="grey">
            Total Sales
          </Heading>
        </CardHeader>
        <CardBody pt="0" pb="2">
          <Text fontSize="sm" as="b">
            $173,000
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default CardHeaderDash;
