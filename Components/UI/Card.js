import  './Card.css';

function Card(props){
    const classes= props.className;// this props.className is recieve data through props.......
    return(
        <div className={classes}> {props.children}
        {/* // this props.children is recieve childrencomponents data and recieve through props....... */}
        
          </div>
    );
};
export default Card;