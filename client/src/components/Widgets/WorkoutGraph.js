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
  { day: 'Sunday', duration: 60 },
  { day: 'Monday', duration: 30 },
  { day: 'Tuesday', duration: 30 },
  { day: 'Wednesday', duration: 45 },
  { day: 'Thursday', duration: 50},
  { day: 'Friday', duration: 60 },
  { day: 'Saturday', duration: 65 },
];

export default class WorkoutChart extends React.PureComponent {
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
        <Chart width={450} height={200}
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField= "duration"
            argumentField="day"
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

