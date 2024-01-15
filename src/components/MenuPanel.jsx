import React , {useState, useEffect, useContext} from 'react'
import {GameContext} from './hooks'
import ButtonRefresh from './ButtonRefresh'
import {GameTimer} from './gameTimer'

//PICTURES
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';
import { useGameContext } from './hooks';


export default function MenuPanel( ){
  const {Counts, Steps} = useContext(GameContext);  
  
  const [Times, RestartTimer, StopTimer, StartTimer] = GameTimer();

  
  
  return (
    <div className="top-panel titles" height="32px" >

      <ButtonRefresh />

      <ParametrLabelWithCFG
        key="HeightTitle"
        id="HeightTitle"
        labelText="Height"
        Value="0"

      />
      <ParametrLabelWithCFG
        key="WidthTitle"
        id="WidthTitle"
        labelText="Width"
        Value="0"
      />


      <ParametrLabel id="ClickNumber" labelText="Steps" Value={Steps} />
      <ParametrLabel id="TimerCount" labelText="Time" Value={Times} />
      <ParametrLabel id="Count" labelText="Count" Value={Counts} />

    </div>
  )
}

function ParametrLabel({id, labelText, Value}){
    return (
        <span id={id}> {labelText}: {Value}</span>
    )
}

function ArgumentButtonUp({labelText}){
  const {onClickUp, onClickDown} = useGameContext();
    
  return (
    <>
        <div className="bbr" onClick={() => onClickUp(labelText)}>
            <img alt = '' src={png_arrow_up} />    
        </div>
        <div className="bbr" onClick={() => onClickDown(labelText)}>
            <img alt = '' src={png_arrow_down} />    
        </div>
    </>
    )
}


function ParametrLabelWithCFG({id, labelText}){
    return (
    <>
        <span id={id} > {labelText}: </span>
        <ArgumentButtonUp labelText={labelText}/>
    </>



)}

