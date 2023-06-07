import React,{useState}from 'react';
import './ExpenceForm.css';

function ExpenceForm(props){
const [enterderTitle, setenteredTitle]  =useState("");
const [enteredAmount, setenteredAmount] =useState("");
const [enteredDate, setenteredDate]     =useState("");

    function titleChangehandler(event){
        setenteredTitle(event.target.value)
    }
    function amountChangehandler(event){
        setenteredAmount(event.target.value)
    }
    function dateChangehandler(event){
        setenteredDate(event.target.value)
    }

    function submithandler(event){
        event.preventDefault();// this is method for stop page relaoding..
        const expencedata={
            title: enterderTitle,
            amount: enteredAmount,
            date:  new Date(enteredDate)
        }// This is object for collect the data of submited form
        props.onsaveexpencedata(expencedata);

        console.log(expencedata);
        setenteredTitle('')//after submit the form clear the title input
        setenteredDate('')// after submit the form clear the date input
        setenteredAmount('')// after submit the form clear the amount input


    
    }


    return(
        <form onSubmit={submithandler}>
                <div className="new-expence__controls">
                    <div className="new-expence__control">
                        <label>Title</label>
                        <input type="text"  value={enterderTitle} onChange={titleChangehandler} />

                    </div>
                    <div className="new-expence__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount}  min="0.01" step="0.01" onChange={amountChangehandler}/>

                    </div>
                    <div className="new-expence__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} onChange={dateChangehandler} />

                    </div>
            </div>
            <div className="new-expence__actions">
                <button type="submit" >Add Expence</button>
            </div>
        </form>
    );
};

export default ExpenceForm;