import React, {useState} from 'react'
import Unselected from '../pictures/Unselected.png';


export default function Card({id, pictureid, checked, showpic, pictureNumber, picturesrc, setStep}){
    
    const [selected, setSelected] = useState(true)

    return (
        <div className='unit' 
            id={id} 
            pictureid = {pictureid} 
            
            showpic={showpic} 
            onClick = {(setStep) => (
                setSelected(!selected) 
                )
            } 
            >
            
            <CardBack  
               id='04' 
               src= '' 
               selected = {selected} 
               picturesrc = {picturesrc}
            />

        </div>
    )

}

function CardBack({id, selected, picturesrc}){
    return (
        <img className='unit-pict' id='' src={selected ? picturesrc : Unselected}/>
    )
}