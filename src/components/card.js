import React from 'react'
import Unselected from '../pictures/Unselected.png';


export default function Card({ind, item, onCardClick = f =>f}){
    
    return (
        <div 
            className= {item.completed === true ? 'unit completed' : 'unit'}
            ind = {ind} 
            onClick = {() => onCardClick(ind)}
            >
            
            <CardFace  
               showCard = {item.showCard} 
               picturesrc = {item.src}
               completed = {item.completed}
            />

        </div>
    )

}

function CardFace({showCard, completed, picturesrc}){
    return (
        <img 
            className = 'unit-pict'
            alt = 'alt' 
            completed = {completed.toString()} src={showCard ? picturesrc : Unselected}
        />
    )
}