import React , {useState, useEffect, useContext} from 'react'
import {GameContext} from './hooks'

function ResultHook(){
    const [ResultItemTable, addNewResult] = useState([]);
    
    return [ResultItemTable, addNewResult];

}

export default function ResultPanel(){
    const {Finished, Steps, CurrentSize} = useContext(GameContext);
    const [ResultItemTable, addNewResult] = ResultHook();
    

    useEffect(()=>{
        if (Finished) {
            console.log('Add new item in useEffect')
            //debugger;
            const ResItem = {
                'position': ResultItemTable.length + 1,
                'steps': Steps,
                'time': 0,
                'size': CurrentSize()}
            addNewResult([...ResultItemTable, ResItem]);
        }


    },[Finished])


    return (
        <div className="down-panel">
                <p>RESULT TABLE</p>
                <table 
                   border="1px" 
                   id="ResultTable"
                   resultlines={ResultItemTable.length}
                >
                    <thead>
                        <tr>
                            <th width="20rem">Position</th>
                            <th width="120rem">Steps</th>
                            <th width="120rem">Time</th>
                            <th width="120rem">Size</th>
                        </tr>
                    </thead>
                    <tbody id="tableResult">

                    {ResultItemTable.map((myTemp, ind)=>
                        (<ResultString key = {ind} {...myTemp}
                    />)
                    )}

                    </tbody>

                </table>
            </div>
    )
}

function ResultString({position, steps, time, size}){
    return (
        <tr>
            <td>{position}</td>
            <td>{steps}</td>
            <td>{time}</td>
            <td>{size}</td>
        </tr>
    )
}