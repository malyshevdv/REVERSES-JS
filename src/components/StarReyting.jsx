import React , {useState} from "react";
import { FaStar } from "react-icons/fa";
import {useColorContext} from "./color-context"

const CreateArray = num => [...Array(num)]

const Star = function ({ColorId, id, selected = false}) {
    const {onSelectReiting} = useColorContext();

    return (
    <FaStar 
        onClick={() => onSelectReiting(ColorId, id+1)}
        color={selected ? "red" : "grey"} 
    />
   )
};
   

export default function StarRaiting({ColorId, TotalStars=3, selectedStars=0}) {
    return (
        <div>
            {CreateArray(TotalStars).map( (item, ind) => 
                <Star 
                    key = {ind}
                    id = {ind}
                    ColorId = {ColorId}
                    selected={ind < selectedStars} 
                    color = { ind <selectedStars ? "red" : "gray"}
                />  )
            }
            <p> Selected {selectedStars} from {TotalStars}</p>
        </div>
    )    
 
}


