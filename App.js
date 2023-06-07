import React,{useState} from 'react';
import './App.css';
import Expences from '../src/Components/Expence/Expences';
import NewExpences from '../src/Components/NewExpences/NewExpences';

let Dommy_expences=[
    {
        id          :"e1",
        title       :"school fee",
        amount      :250,
        date        :new Date(2023,6,5)

    },
    {
        id          :"e2",
        title       :"Books",
        amount      :250,
        date        :new Date(2023,6,5)

    },
    {
        id          :"e3",
        title       :"House rent",
        amount      :250,
        date        :new Date(2023,6,5)

    },
    {
        id          :"e4",
        title       :"cab rent",
        amount      :250,
        date        :new Date(2023,6,5)

    },
    
];
function App(){
    const [expences, newexpences] = useState(Dommy_expences)
    // Fetch API for data take from server to local..
        fetch("URL pass from there coming data from ")
        
    function addexpencehandler(expence){
        const updatedexpence=[expence, ...expences]
        newexpences(updatedexpence)
    }

    // fetch API for data transfer from local to server.
    fetch('url_link',{
        method: 'POST',  // psot for data send to server.
        body: JSON.stringify('conetent name which is send to server'),
        headers: {
            'content-Type' : 'application/json'
        }
    }
    );

             return(<div>
                     <NewExpences  onAddexpence={addexpencehandler} />
                     <Expences Item={expences}/>
                     {/* // this is data transfer from parent to child */}
                    </div>

                )
            
         };
export default App ;