import React from 'react'
import png_refresh from '../pictures/refresh.png';

import {useGameContext} from "../components/hooks"

export default function ButtonRefresh(){
    const {onClickRestart} = useGameContext();
    //ClickButton("ReFill")

return(

    <div 
       className="button" 
       onClick = {() => {onClickRestart();}} 
       height="32px"

    >
        <img src={png_refresh} width="23px" height="23px" />
        RESTART
    
    </div>

)
}