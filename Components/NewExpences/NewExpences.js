import React from "react";
import './NewExpences.css';
import ExpenceForm from "./ExpenceForm";

function NewExpences(props){

    // this function use for data recieve from child components to parent components
    function saveexpencedatahandler(enteredexpencedata){
        const expenceData={
            ...enteredexpencedata, // there is used spread operator for copy the data...
            id:Math.random().toString()
        };
        props.onAddexpence(expenceData);
        console.log(expenceData);
    };
   

    return( 
        <div className="new-expence">
           <ExpenceForm  onsaveexpencedata={saveexpencedatahandler}/>
        </div>
    );
};

export default NewExpences;
