import React, {useState} from 'react'

import Card from '../components/card'



//======= POLE ================

export default function PolePanel({ItemList, onCardClick = f => f}){

    
    return (
        <div id='pole' className="pole">
            {ItemList.map((item, ind)=>    
            <Card 
                key={ind} 
                ind={ind} 
                item={item} 
                onCardClick = {onCardClick}
                />    
            )}
            
        </div>
    )
}

