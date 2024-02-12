import React, {memo} from 'react'
import Unselected from '../pictures/Unselected.png';
import { useGameContext } from './hooks';



export function Card({ind, completed,showCard, src}){
    const {onCardClickPole} = useGameContext();
    console.log('Card ' + ind);
    return (
        <div 
            id={'card_'+ ind} 
            showCard={showCard.toString()} 
            completed={completed.toString()} 
            

            className= {completed === true ? 'unit completed' : 'unit'}
                ind = {ind} 
                onClick = {() => onCardClickPole(ind)}
            >
            
            <CardFace  
               id={'pict_'+ ind}
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

function CardFace({showCard, completed, picturesrc, id}){
    return (
        <img 
            id={id}
            className = 'unit-pict'
            alt = 'card' 
            completed = {completed.toString()} 
            
            src={showCard ? picturesrc : Unselected}
        />
    )
}