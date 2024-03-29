import React from 'react'
import png_refresh from '../pictures/refresh.png';
import {Button } from '@aws-amplify/ui-react';
import {useGameContext} from "./hooks"

export default function ButtonRefresh(){
    const {OnClickRefresh} = useGameContext();
    //ClickButton("ReFill")

return(

    <Button id="ButtonRefresh"
       className="button" 
       onClick = {() => OnClickRefresh()} 
       height="32px"

    >
        <img src={png_refresh} width="23px" height="23px" />
        RESTART
    
    </Button>

)
}