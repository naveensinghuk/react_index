import './ExpenceDate.css';

function ExpenceDate(props){
    let day=props.datee.toLocaleString('en-US',{day:'2-digit'});
    let month=props.datee.toLocaleString('en-US',{month: "long"});
    let year=props.datee.getFullYear();

    return (
        <div className="expence-date">  
            {/* <div>{props.date.toISOString()}</div> toISOString() this is a mathod for date convert to string. */}

                <div className="expence-date__month"> {month}</div>
                <div className="expence-date__year"> {year}</div>
                <div className="expence-date__day"> {day}</div>
            </div>
    )

};
export default ExpenceDate;