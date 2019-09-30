import React from 'react';
import { XYPlot, XAxis, YAxis, VerticalBarSeries } from 'react-vis';
import Box from '@material-ui/core/Box';

export default class ActivityChart extends React.Component {
  render() {
    const data1 = [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ];

    const data2 = data1.map(row => {
      return { x: row.x, y: row.y - 1 };
    });

    const data3 = data1.map(row => ({ x: row.x, y: row.y + 1 }));

    return (
      <Box>
        <XYPlot height={400} width={600}>
          <XAxis />
          <YAxis />
          <VerticalBarSeries data={data1} animation="noWobble" />
          <VerticalBarSeries data={data2} animation="noWobble" />
          <VerticalBarSeries data={data3} animation="noWobble" />
        </XYPlot>
      </Box>
    );
  }
}
