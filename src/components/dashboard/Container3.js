import { Card } from '@chakra-ui/react';
import React from 'react';

import Chart from 'react-apexcharts';
import { data } from '../../data/dummy-data';

const Container3 = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="55%"
      ml="0"
      mb="4"
    >
      <Chart
        options={data.options}
        series={data.series}
        type="candlestick"
        height={350}
        width="500"
      />
    </Card>
  );
};

export default Container3;
