import './Expences.css';
import ExpenceItem from './ExpenceItem';
import Card from '../UI/Card';
function  Expences(props){

    return(
        <Card className="expences">
            {
                props.Item.map(
                    expence=>(<ExpenceItem 
                        key    ={expence.id}
                        date   ={expence.date} 
                        title  ={expence.title} 
                        amount ={expence.amount} />)
                )
                    }
        </Card>
    )
};

export default Expences;