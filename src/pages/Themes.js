import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import Display from '../components/Display';

const Themes = () => {
  const images = useLoaderData();
  return (
    <>
      <Heading textAlign="center" marginY="3rem" id="#themes">
        Themes
      </Heading>
      {/* <Box boxSize="md">
        <Image src={images[1].download_url} alt="Dan Abramov" />
      </Box> */}

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
      >
        {images.map(image => (
          <Display src={image.download_url} alt={image.author} key={image.id} />
        ))}
      </Stack>
    </>
  );
};

export default Themes;
