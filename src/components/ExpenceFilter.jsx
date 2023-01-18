import React from 'react';
import './expenceFilter.css'


const ExpenceFilter=()=>{
    return     <div className="filter">
    <h2>Filter By Year</h2>

    <select  id="selectFilter" style={{ width: "" }}>
        <option value="">2020</option>
        <option value="">2021</option>
        <option value="">2022</option>
        <option value="">2023</option>
    </select>
     </div>

}

export default ExpenceFilter;