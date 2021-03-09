import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  BarSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const Root = props => (
  <Legend.Root
    {...props}
    style={{
      display: 'grid',
      gridTemplateColumns: 'auto auto auto',
      margin: 'auto',
    }}
  />
);
const data = [
  { day: 'Sunday', duration: 60, series: 'CrossFit' },
  { day: 'Monday', duration: 30, series: 'Cardio'},
  { day: 'Tuesday', duration: 30, series: 'Yoga' },
  { day: 'Wednesday', duration: 45, series: 'Weight Training' },
  { day: 'Thursday', duration: 50, series: 'Weight Training'},
  { day: 'Friday', duration: 45, series: 'CrossFit' },
  { day: 'Saturday', duration: 60, series: 'Yoga'},
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
        <Chart width={700} height={350}
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis/>

          <BarSeries
            name = "Type"
            valueField= "duration"
            argumentField="day"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} />
          <Title text="Workout Streak" />
          <Stack
            stacks={[
              { series: ['Cardio', 'Weight Lifting', 'CrossFit', 'Yoga'] },
              
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}

