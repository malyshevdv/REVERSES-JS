import React , {useState, useEffect, useContext} from 'react'
import {GameContext} from './hooks'
import ButtonRefresh from './ButtonRefresh'
import {GameTimer} from './gameTimer'

//PICTURES
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';
import { useGameContext } from './hooks';

import { Flex, Grid, View, useTheme, Button } from '@aws-amplify/ui-react';

import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles

export default function MenuPanel( ){
  const {Counts, Steps} = useContext(GameContext);  
  
  const [Times, RestartTimer, StopTimer, StartTimer] = GameTimer();
  const { tokens } = useTheme();
  
  
  return (

    
    <Flex
      
      direction="row"
      justifyContent="center"
      alignItems="stretch"
      alignContent="center"
      wrap="nowrap"
      gap="1rem"
    >
      <ButtonRefresh backgroundColor={tokens.colors.pink[20]}/>
        <ParametrLabelWithCFG
          key="HeightTitle"
          id="HeightTitle"
          labelText="Height"
          tokens = {tokens}
          Value="0"
          

        />
      <ParametrLabelWithCFG
        key="WidthTitle"
        id="WidthTitle"
        labelText="Width"
        tokens = {tokens}
        Value="0"
      />
        <ParametrLabel id="ClickNumber" labelText="Steps" tokens = {tokens} Value={Steps} />
        <ParametrLabel id="TimerCount" labelText="Time" tokens = {tokens} Value={Times} />
        <ParametrLabel id="Count" labelText="Count" tokens = {tokens} Value={Counts} />
    </Flex>
  )
}

function ParametrLabel({id, labelText,tokens , Value}){
  
    return (
      <Button >
        <span id={id}> {labelText}: {Value}</span>
        </Button>  
    )
}

function ArgumentButtonUp({labelText, tokens}){
  const {onClickUp, onClickDown} = useGameContext();
  
  return (
    <Button >
        <div className="bbr" onClick={() => onClickUp(labelText)}>
            <img alt = '' src={png_arrow_up} />    
        </div>
        <div className="bbr" onClick={() => onClickDown(labelText)}>
            <img alt = '' src={png_arrow_down} />    
        </div>
    </Button>
    )
}


function ParametrLabelWithCFG({id, labelText}){
    return (
    <>
        <span id={id} > {labelText}: </span>
        <ArgumentButtonUp labelText={labelText}/>
    </>



)}

