import React from 'react';
import './expenceFilter.css'
import { useState } from 'react';


const ExpenceFilter=(props)=>{
    // const [select, setSelect]=useState('')
    const onChangeFilterHandler=(event)=>{
        console.log(event.target.value);
        props.onSetFilter(event.target.value)
    }
    return   <div className="filter">
    <h2>Filter By Year</h2>

    <select  id="selectFilter" style={{ width: "" }} onChange= {onChangeFilterHandler } >
    <option >Select Year</option>
         <option >2020</option>
        <option >2021</option>
        <option >2022</option>
        <option >2023</option>
    </select>
     </div>

}

export default ExpenceFilter;