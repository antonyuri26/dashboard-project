import { Card } from '@chakra-ui/react';
import React from 'react';

import Chart from 'react-apexcharts';
import { data } from '../../data/dummy-data';
import { useMediaQuery } from '@chakra-ui/react';
import classes from './Container3.module.css';

const Container3 = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  let graph = '';

  graph = (
    <Chart
      options={data.options}
      series={data.series}
      type="candlestick"
      height={350}
      className={classes.graphic}
    />
  );

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '55%' : '100%'}
      ml="0"
      mb="4"
      pt="2"
    >
      {graph}
    </Card>
  );
};

export default Container3;
