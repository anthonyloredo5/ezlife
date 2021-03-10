import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './WaterIntake.css';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

const data = [
  { day: 'Mon.', cup: 2 },
  { day: 'Tues.', cup: 3 },
  { day: 'Wed.', cup: 3.5 },
  { day: 'Thur. ', cup: 1 },
  { day: 'Fri.', cup: 6 },
  { day: 'Sat.', cup: 4 },
  { day: 'Sun.', cup: 6.7},
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
      <Paper style= {{
        width: "299px",
        marginRight: "20px",
        boxShadow: "0 15px 20px rgba(0,0,0,0.30), 0 10px 12px rgba(0,0,0,0.22)",
      
      }}>
        <Chart
          data={chartData}
          style= {{width: "299px", marginRight: "20px"}}
        >
          <ArgumentAxis />
          <ValueAxis max={10} />

          <BarSeries
            valueField="cup"
            argumentField="day"
          />
          <Title text="Water Intake"  />
          <Animation />
        </Chart>
        <Button  variant="contained" style={{
          backgroundColor: "#42a5f5",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "85px",
          marginBottom: "5px"
        
        }} onClick={()=>{}}>Add Water</Button>
      </Paper>
    );
  }
}