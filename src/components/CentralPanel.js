import React , {useState, useEffect, memo} from 'react'

import MenuPanel from '../components/MenuPanel'
import BoardPanel from './BoardPanel'
import ResultPanel from '../components/ResultPanel'
import {GameTimer} from '../components/gameTimer'
import Board from './Board'

import App from '../components/test_app'

import {InvertCard, reminesToOpen, GameContext, max_pictures, unsortList, pictureList} from '../components/hooks'

//PICTURES
import png_refresh from '../pictures/refresh.png';
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';
import png_arrow_left from '../pictures/arrow-left.png';
import png_arrow_right from '../pictures/arrow-right.png';


//   CARD CLICK



export default function CentralPanel(){

  const [ItemList, OnClickRefresh, getfillList, SetupNewWidth, SetupNewHeight, onCardClick, Steps, Counts, Finished, CurrentSize] = Board();

  const [Times, RestartTimer, StopTimer, StartTimer] = GameTimer();

  
  const onCardClickPole = (id) => {
      
    const res = onCardClick(id);
    //debugger
    if (res.steps === 1) {StartTimer()};

  }
  
  const onClickRestart = () => {
    OnClickRefresh(getfillList());
    RestartTimer();
  }

  const onClickUp = (Param1) => {
    if (Param1 === 'Height') {SetupNewHeight(+ 1); onClickRestart();};
    
    if (Param1 === 'Width')  {SetupNewWidth(+ 1);onClickRestart();};
  }

  const onClickDown = (Param1) => {
    if (Param1 === 'Height') {SetupNewHeight(-1);onClickRestart();};

    if (Param1 === 'Width') {SetupNewWidth(-1);onClickRestart();};
  }

  
  useEffect(()=>{
    //const myWidth = localStorage.getItem('width');
    //console.log('width from storage : ' + myWidth + '  ' + Times);
  console.log('RENDER')
    if (Times> 5) {
      StopTimer();
      console.log('stop timer');
    }; 

  })

  useEffect(()=>
  {
    if (Steps===1) {StartTimer()}
  },[Steps]
  )

  return (
      <div className='centralpanel'>
         <GameContext.Provider value = {{ItemList, onClickRestart, onCardClickPole , onClickUp, onClickDown, RestartTimer, Finished, CurrentSize, Steps, Counts, Times}}>

            <MenuPanel 
                Counts={Counts} 
                Times = {Times}
                />
            
            <BoardPanel />
            
            <ResultPanel/>
            
          </GameContext.Provider>    

          

      </div>
    )
  }

//  <App/>


