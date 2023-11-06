import React from 'react'
import png_refresh from '../pictures/refresh.png';

export default function ButtonRefresh({onClickRestart = f => f}){

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