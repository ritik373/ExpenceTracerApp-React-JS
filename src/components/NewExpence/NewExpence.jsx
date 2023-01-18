import React from 'react';

import ExpenceForm from './ExpenceForm';



const NewExpence = (props) => {
    var count =1;

    const ExpenceDetail=(FormData)=> {

        let expence = {
            ...FormData,
            id:`e+${count++}`,
            // math: Math.random().toString(),
            // name:"ritik you are jenious"
        }
        props.addExpencedata(expence)

    }
    return <div>
        <ExpenceForm
         onSaveExpenceData={ExpenceDetail}
            // name="ritik gupta"
             />

    </div>
}

export default NewExpence;
