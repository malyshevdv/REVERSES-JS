import React , {useState} from "react";
import { FaStar } from "react-icons/fa";


const CreateArray = num => [...Array(num)]

//onClick={onSelect(1)}

const Star = ({ColorId, id, selected = false, onSelectReiting = f => f }) => (
    <FaStar 
        onClick={() => onSelectReiting(ColorId, id+1)}
      
        //onClick={() => onSelectReiting("83c7ba2f-7392-4d7d-9e23-35adbe186046", id+1)}
      
      color={selected ? "red" : "grey"} 
       
    />
   );
   

export default function StarRaiting({ColorId, TotalStars=3, selectedStars=0, onSelectReiting = f => f}) {
    
    return (
        <div>
            {CreateArray(TotalStars).map( (item, ind) => 
                <Star 
                    key = {ind}
                    id = {ind}
                    ColorId = {ColorId}
                    selected={ind < selectedStars} 
                    color = { ind <selectedStars ? "red" : "gray"}
                    onSelectReiting = {onSelectReiting} 
                    
                />  )
            }
            <p> Selected {selectedStars} from {TotalStars}</p>
        </div>
    )    
 
}

//onSelect = {() => setSelectStars(iii +  1)} 

