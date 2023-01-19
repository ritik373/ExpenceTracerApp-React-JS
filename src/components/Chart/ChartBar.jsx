import React from 'react';
import './ChartBar.css';
// import CharBar from './CharBar'

const ChartBar = (props) => {
    // console.log("you are in ChartBar")
    let fillBarHeight='0%';
    
    if(props.maxValue>0){
        fillBarHeight=Math.round((props.value / props.maxValue) * 100) +'%'
        console.log(fillBarHeight)
    }
    return (
        <div className='chart-bar'>
           <div className='chart-bar__inner'>
              
               <div className='chart-bar__fill' style={{height:fillBarHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.lable}</div>
        </div>
    )

}
export default ChartBar;