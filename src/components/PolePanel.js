import React from 'react'

import Card from '../components/card'
import { useGameContext } from './hooks'



//======= POLE ================

export default function PolePanel(){
    const {ItemList} = useGameContext();
    
    return (
        <div id='pole' className="pole">
            {ItemList.map((item, ind)=>    
            <Card 
                key={ind} 
                ind={ind} 
                item={item} 
                />    
            )}
            
        </div>
    )
}

