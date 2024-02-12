import React from 'react'

import {Card} from './card'
import { useGameContext } from './hooks'



//======= POLE ================

export default function BoardPanel(){
    
    const {ItemList, pictureCount} = useGameContext();
    
    return (
        <div id='pole' className="pole" pictureCount={pictureCount()} >
            {ItemList.map((item, ind)=>    
            <Card 
                key={ind} 
                ind={ind} 
                completed={item.completed}
                showCard={item.showCard}
                src={item.src}
                item={item} 
                />    
            )}
            
        </div>
    )
}

