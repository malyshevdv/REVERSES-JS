import React, {memo} from 'react'
import Unselected from '../pictures/Unselected.png';
import { useGameContext } from './hooks';



export function Card({ind, completed,showCard, src}){
    const {onCardClickPole} = useGameContext();
    console.log('Card ' + ind);
    return (
        <div 
            className= {completed === true ? 'unit completed' : 'unit'}
                ind = {ind} 
                onClick = {() => onCardClickPole(ind)}
            >
            
            <CardFace  
               showCard = {showCard} 
               picturesrc = {src}
               completed = {completed}
            />

        </div>
    )

}

export const Card2 = memo(Card, (prevProp, newProp) => (
    prevProp.completed === newProp.completed && 
    prevProp.showCard === newProp.showCard)
    )

function CardFace({showCard, completed, picturesrc}){
    return (
        <img 
            className = 'unit-pict'
            alt = 'card' 
            completed = {completed.toString()} 
            
            src={showCard ? picturesrc : Unselected}
        />
    )
}