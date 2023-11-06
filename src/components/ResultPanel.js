export default function ResultPanel({ResultItemTable}){

    return (
        <div className="down-panel">
                <p>RESULT TABLE</p>
    
                <table border="1px" >
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