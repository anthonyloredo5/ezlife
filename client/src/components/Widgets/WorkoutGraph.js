import * as React from 'react';
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

const data = [
    {

    }
]
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
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            name="Cardio"
            valueField="maleyoung"
            argumentField="state"
          />
          <BarSeries
            name="Weight-Training"
            valueField="malemiddle"
            argumentField="state"
          />
          <BarSeries
            name="Yoga"
            valueField="maleolder"
            argumentField="state"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} />
          <Title text="Workout Streak" />
          <Stack
            stacks={[
              { series: ['Cardio', 'Weight-Training', 'Yoga'] },
              { duration: []},
            ]}
          />
        </Chart>
      </Paper>
    );
  }
}
