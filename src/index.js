import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mystyle.css';
//import App from './App';

//COMPONENTS

import MainPanel from './components/mainPanel'


let dim_width = 6
let dim_height = 3
let pictureCount = Math.floor(dim_width * dim_height/2)
let TimerCount = 0;
let myTimer = 0; //setInterval(showTimer, 1000);

clearInterval(myTimer)

//setInterval(Refill(), 1000);

function showTimer(){
  TimerCount +=1;
  //UpdateTitles()
  if (TimerCount>5000){
      clearInterval(myTimer); 
  }
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



const root = ReactDOM.createRoot(document.getElementById('root'));

let res = 1

root.render( <MainPanel/>);





