import React from 'react'
import './App.css';
import ExpenceItem from './components/ExpenceItem';
import Dummy_data from './components/data'
import Formdata from './components/NewExpence/ExpenceForm'
import ExpenceFilter from './components/ExpenceFilter'
import NewExpenceForm from './components/NewExpence/NewExpence'
import { useState } from 'react';



const App=()=>{
    const [isEditting,setisEditting]=useState(false);

    const [Add_item , setItem]=useState(Dummy_data);

    const [datefilter,setAddDateFilter]=useState('')

  

    const onAddExpenceData=(formdata)=>{

        setItem([formdata,...Add_item]);
        // Dummy_data.push(formdata)
        // setAddFilter([formdata,...addfilter])

    
        console.log(Add_item);
        // console.log("your form data");
    }
    
    const onSetFilterHandler=(setDate)=>{
        setAddDateFilter(setDate.toString())
         }

         const  filterExpence=Add_item.filter((expencedata)=>{    
            //  console.log(expencedata.date.getFullYear())

                 return  expencedata.date.getFullYear().toString() === datefilter;

         })

    const ButtonClickedHandler=()=> {
        setisEditting(true);

    }
  const onHideFormHandler=()=>{
    setisEditting(false);

  }

    return <div>

    <div className="container">
    <h1 style={{color:"white"}}>!_!</h1>


   {!isEditting && <button type='button' onClick={ButtonClickedHandler}style={{color:"white"}}>ADD EXPENCE</button>}
    {isEditting&&<NewExpenceForm  onClick={onHideFormHandler}  addExpencedata={onAddExpenceData} />}

    
    
    <div className="cards">

    <ExpenceFilter  onSetFilter={onSetFilterHandler} />
     { filterExpence.length===0 ? (<h1 style={{color:"white"}}>No Expence Found </h1>) :(filterExpence.map((Element)=>{
        return (<ExpenceItem
           key={Element.id}
           title={Element.title}
           amount={Element.amount}
           date={Element.date.toLocaleString()}
         

       />) 

    }))}


    </div>
    
    
    </div>
</div>
}

export default App;
