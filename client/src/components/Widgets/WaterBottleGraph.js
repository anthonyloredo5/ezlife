import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { water: '', intake: 65 }
];

export default class WaterBottle extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper>
        <Chart width={200} height={200}
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={2} />

          <BarSeries
            valueField="intake"
            argumentField="water"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}


