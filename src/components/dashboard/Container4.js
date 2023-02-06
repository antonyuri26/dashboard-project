import { Card } from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import { state } from '../../data/dummy-data';
import { useMediaQuery } from '@chakra-ui/react';

const Container4 = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [isLargerThan450] = useMediaQuery('(min-width: 600px)');

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '59%' : '100%'}
      // width="59%"
      // ml="4"
      ml={isLargerThan900 ? '4' : '0'}
      mb="4"
      pt="2"
    >
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              // width="820"
              width={isLargerThan900 ? '820' : '610'}
              width={isLargerThan600 ? '610' : '500'}
              width={isLargerThan450 ? '500' : '400'}
              height="355"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Container4;
