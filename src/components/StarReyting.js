import React , {useState} from "react";
import { FaStar } from "react-icons/fa";


const CreateArray = num => [...Array(num)]

const Star = ({ selected = false, onSelect = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
   );
   

export default function StarRaiting({TotalStars=3, selectedStars=0}) {

    return (
        <div>
            {CreateArray(TotalStars).map( (item,iii) => 
            
            <Star id = {'star' + iii}
                selected={iii < selectedStars} 
                color = { iii <selectedStars ? "red" : "gray"} 
                
    
                />  )
            }
            <p> Selected {selectedStars} from {TotalStars}</p>
        </div>
    )    
 
}

//onSelect = {() => setSelectStars(iii +  1)} 

