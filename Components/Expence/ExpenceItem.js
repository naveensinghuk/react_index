import React from 'react';// this is use useState name hook, installed from react library.......... 

import './ExpenceItem.css';
import ExpenceDate from './ExpenceDate';
import Card from '../UI/Card';

// function ExpenceItem(props){

//     const [newTitle, newsettitle] = useState("")// this is for input value.......

//     function changehandaler(event){
//     newsettitle(event.target.value)// this is properties.. for target a values.
// };

//     const [title, settitle] = useState(props.title);// array distructuring...    
//     // this is hook and it will give return two values as a array form. first is variable and second is function()  and second value can be set the new value .......

//     // let clickhandler=()=>{
//     //     settitle(prompt("enter the value"))// this settile function return from useState funtion hare can be value change......
//     // }

//     let clickhandler=()=>{
//         settitle(newTitle)// this settile function return from useState funtion hare can be value change......
//     }

    
//     return(
//         // this is outer component..
//         <Card className='expence-item'> 

//             <ExpenceDate datee={props.date}/>
            
//             <h2>{title}</h2>

//             <div className='expence-item__discription'>

//                 <div className='expence-item__price'>
//                     {props.amount}
//                 </div>
                            
//             </div>
//             <input type='text' value={newTitle} onChange={changehandaler}/> 
//             {/* // {newTitle} this is variable and it will same value as variable. */}

//             <button onClick={clickhandler}>Change Title</button>
            
//         </Card>
//     )

// };
// export default ExpenceItem;

//


function ExpenceItem(props){
    // Adding Form for New Expence
    return(
        
        <Card className='expence-item'> 

            <ExpenceDate datee={props.date}/>
            
            <h2>{props.title}</h2>

            <div className='expence-item__discription'>

                <div className='expence-item__price'>
                    {props.amount}
                </div>
                            
            </div>
           </Card>
    )
        };

export default ExpenceItem;
    