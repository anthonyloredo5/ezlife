import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { year: '1', population: 2.525 },
  { year: '2', population: 3.018 },
  { year: '3', population: 3.682 },
  { year: '4', population: 4.440 },
  { year: '5', population: 5.310 },
  { year: '6', population: 6.127 },
  { year: '7', population: 6.930 },
];

export default class Demo extends React.PureComponent {
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
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis max={10} />

          <BarSeries
            valueField="population"
            argumentField="year"
          />
          <Title text="Water Intake" />
          <Button onClick={()=>{}}>Add Water</Button>
          <Animation />
        </Chart>
      </Paper>
    );
  }
}