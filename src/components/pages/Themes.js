import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useLoaderData } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';
import Display from '../homePage/Display';

const Themes = () => {
  const images = useLoaderData();
  return (
    <>
      <Heading textAlign="center" marginY="3rem" id="#themes" pt={'50'}>
        Themes
      </Heading>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        width="100%"
      >
        {images.map(image => (
          <Display
            src={image.download_url}
            alt={image.author}
            key={image.id}
            width={'200px'}
            loading={'lazy'}
          />
        ))}
      </Stack>
    </>
  );
};

export default Themes;
