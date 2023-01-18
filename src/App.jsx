import React from 'react'
import './App.css';
import ExpenceItem from './components/ExpenceItem';
import Dummy_data from './components/data'
import Formdata from './components/NewExpence/ExpenceForm'
import ExpenceFilter from './components/ExpenceFilter'
import NewExpenceForm from './components/NewExpence/NewExpence'
import { useState } from 'react';

const date=new Date();

const App=()=>{

    const [Add_item , setItem]=useState(Dummy_data);

    const onAddExpenceData=(formdata)=>{

        setItem([formdata,...Add_item]);

    
        console.log(Add_item);
        // console.log("your form data");
    }



    return <div>

    <div className="container">
    <h1>HERE YOU CAN SEE EXPENCE AMOUNT</h1>

    <NewExpenceForm  addExpencedata={onAddExpenceData} />

    
    
    <div className="cards">

    <ExpenceFilter />

    {Add_item.map((Element)=>{
        return (<ExpenceItem
           key={Element.id}
           title={Element.title}
           amount={Element.amount}
           date={Element.date}
         

       />) 

    })}


    </div>
    
    
    </div>
</div>
}

export default App;
