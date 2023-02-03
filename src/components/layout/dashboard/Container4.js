import { Card } from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import { state } from '../../../data/dummy-data';

const Container4 = () => {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width="59%"
      ml="4"
      mb="4"
    >
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="530"
              height="355"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Container4;
