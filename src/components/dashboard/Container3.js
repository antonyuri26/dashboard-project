import { Card } from '@chakra-ui/react';
import React from 'react';

import Chart from 'react-apexcharts';
import { data } from '../../data/dummy-data';
import { useMediaQuery } from '@chakra-ui/react';

const Container3 = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [isLargerThan450] = useMediaQuery('(min-width: 600px)');

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '55%' : '100%'}
      // width="55%"
      ml="0"
      mb="4"
      pt="2"
    >
      <Chart
        options={data.options}
        series={data.series}
        type="candlestick"
        height={350}
        width={isLargerThan900 ? '780' : '610'}
        width={isLargerThan600 ? '610' : '500'}
        width={isLargerThan450 ? '500' : '400'}
      />
    </Card>
  );
};

export default Container3;
