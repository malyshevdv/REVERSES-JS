import React from 'react'

import {Card} from './card'
import { useGameContext } from './hooks'
import { Flex, Grid, View, useTheme, Button } from '@aws-amplify/ui-react';


//======= POLE ================

export default function BoardPanel(){
    
    const {ItemList, pictureCount, templateColumns} = useGameContext();
    
    //"1fr 1fr 1fr 1fr 1fr 1fr  1fr"

    return (
        <Grid 
           templateColumns= {templateColumns}
           id='pole' 
           className="pole" 
           gap="1rem"
           justifyContent="center"
           pictureCount={pictureCount()} 
        >
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
            
        </Grid>
    )
}

