import React from 'react'
import './chart.css'
import { useHistory } from 'react-router'
import { Chart } from "react-google-charts";

export default function Charts() {
    let  history= useHistory()
    const [number, setNumber] = React.useState(0);
  
    // add side effect to component
    React.useEffect(() => {
      // create interval
      const interval = setInterval(
        // set number every 5s
        () => setNumber(Math.floor(Math.random() * 100 + 1)),
        1000
      );

      // clean up interval on unmount
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (<>
  
  <div
      className='linechart'
    >
        <div   className='linechart_head'>
        <div onClick={()=>history.push('/')}>
                    HOME
                </div>
                <div onClick={()=>history.push('/employe')}>
                    Employes
                </div>
                <div onClick={()=>history.push('/notification')}>
                    Notification
                </div>
        </div>
<Chart
  width={'1100px'}
  height={'700px'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'dogs', 'cats'],
    [0, 0, 0],
    [1, 10, 5],
    [2, 23, 15],
    [3, 17, 9],
    [4, 18, 10],
    [5, 9, 5],
    [6, 11, 3],
    [7, 27, number],
  ]}
  options={{
    legendTextStyle: { color: '#FFF' },
    // titleTextStyle: { color: '#FFF' },
    // color:'#FFf',
    hAxis: {
      title: 'Time',
      color:'white',
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#FFF' },
    
    },
    vAxis: {
      title: 'Popularity',
      color:'white',
      titleTextStyle: { color: '#FFF' },
      fontSize:'20px'
    },
    series: {
      1: { curveType: 'function' },
    },
    backgroundColor: {
        fill: 'gray',
        fillOpacity: 0.5
     },
     is3D: true
  
  }}
  rootProps={{ 'data-testid': '2' }}
/>
<br></br>
<br></br>
<Chart
   width={'1100px'}
   height={'700px'}
  chartType="BubbleChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
    ['CAN', 80.66, 1.67, 'North America', 33739900],
    ['DEU', number, 1.36, 'Europe', 81902307],
    ['DNK', 78.6, 1.84, 'Europe', 5523095],
    ['EGY', 72.73, 2.78, 'Middle East', 79716203],
    ['GBR', 80.05, 2, 'Europe', 61801570],
    ['IRN', 72.49, 1.7, 'Middle East', 73137148],
    ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
    ['ISR', 81.55, 2.96, 'Middle East', 7485600],
    ['RUS', 68.6, 1.54, 'Europe', number*10000],
    ['USA', 78.09, number, 'North America', 307007000],
  ]}
  options={{
    title:
      'Correlation between life expectancy, fertility rate ' +
      'and population of some world countries (2010)',
    hAxis: { title: 'Life Expectancy' },
    vAxis: { title: 'Fertility Rate' },
    bubble: { textStyle: { fontSize: 11 } },
    backgroundColor: {
        fill: 'gray',
        fillOpacity: 0.5
     },
     is3D: true
  }}
  rootProps={{ 'data-testid': '1' }}
/>
    </div>
    
    </>
    )
}

