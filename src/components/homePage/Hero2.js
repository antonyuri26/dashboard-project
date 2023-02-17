import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import hero from '../../images/6308-hero.jpg';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'} mt={'45px'} mb={'15px'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 10 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Meeting scheduling{' '}
          <Text as={'span'} color={'blue.400'}>
            made easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'blue'}
            bg={'blue.400'}
            _hover={{ bg: 'blue.500' }}
          >
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Image src={hero} />
        </Flex>
      </Stack>
    </Container>
  );
}
