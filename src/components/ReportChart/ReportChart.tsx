import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import {
  Chart,
  PieSeries,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import classes from './Report.module.scss'
import { Palette } from '@devexpress/dx-react-chart'
interface data {
    argument: string
    value: number
}

interface props {
    data?: data[]
}
const data = [
    { argument:'Monday', value:40 },
    { argument:'Tuesday', value:30 },
    
  ];
  const schemeCollection = [
    "#938AF5",
    "#9FF1CA"
  ];

const ReportChart: React.FC<props> = ({}) => {
    // const [scheme, setScheme ] = useState('')
    // const changeScheme = (e)=>{
    //     setScheme(schemeCollection[e.target.value]);
    //   }
  return (
    <Paper sx={{
        textAlign: 'center',
        width: '300px',
        padding: '2em 0'
    }}>
        <h4>Purchase summary</h4>
        <div className={classes.chart}>
            <Chart width={200}
            height={200}
            data={data}
            >
                <Palette scheme={schemeCollection}/>
            <PieSeries valueField="value" argumentField="argument"
            innerRadius={0.75}
            />
            <div className={classes.chart__middle_text}>
                <p>Total</p>
                <p>$20,000.00</p>
            </div>
            </Chart>
        </div>
        <div className={classes.chart__line}>
            <div className={`${classes.chart__circle} ${classes.chart__green}`}></div>
            <p>Online</p>
        </div>
        <div className={classes.chart__line}>
            <div className={classes.chart__circle}></div>
            <p>Offline</p>
        </div>
  </Paper>
  )
}

export default ReportChart
