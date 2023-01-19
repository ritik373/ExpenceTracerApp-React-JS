import React from 'react';
import ReactDom from 'react-dom';
import './ExpenceItem.css';
import { useState } from 'react';


const ExpenceItem = (props) => {

    const [title, setTitle] = useState(props.title);

    function onClickHandler() {
        setTitle('Updated Successfull');


    }
    function ondblclickHandler() {
        setTitle(props.title);
        // setTitle('')

    }




    return <div>
    


        <div className="card">
            <div className="flex cardset">
                <lable className="btn1">{props.date}</lable>
                <h3>{title}</h3>
                <button className="btn2">${props.amount}</button>
                <button style={{ height: "50px", width: "80px" }} onClick={onClickHandler} onDoubleClick={ondblclickHandler}>Change Title</button>

            </div>


        </div>
    </div>
}
export default ExpenceItem;