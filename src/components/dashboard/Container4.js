import { Card } from '@chakra-ui/react';
import React from 'react';
import Chart from 'react-apexcharts';
import { state } from '../../data/dummy-data';
import { useMediaQuery } from '@chakra-ui/react';
import classes from './Container4.module.css';

const Container4 = () => {
  const [isLargerThan900] = useMediaQuery('(min-width: 900px)');

  let graph = '';
  graph = (
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      className={classes.graphic}
      height="355"
    />
  );

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      variant="outline"
      width={isLargerThan900 ? '59%' : '100%'}
      ml={isLargerThan900 ? '4' : '0'}
      mb="4"
      pt="2"
    >
      {graph}
      {/* <div className="app">
        <div className="row">
          <div className="mixed-chart">{graph}</div>
        </div>
      </div> */}
    </Card>
  );
};

export default Container4;
