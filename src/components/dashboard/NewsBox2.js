import { Box, Card } from '@chakra-ui/react';

import Chart from 'react-apexcharts';

import { data_circle as data } from '../../data/dummy-data';

const NewsBox2 = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="35%"
      ml="4"
      mb="4"
    >
      <Box width={'100%'} height={'10%'}>
        <Chart options={data.options} series={data.series} type="polarArea" />
      </Box>
    </Card>
  );
};

export default NewsBox2;
