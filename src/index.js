import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mystyle.css';
//import App from './App';

import '@aws-amplify/ui-react/styles/reset.layer.css' // global CSS reset
import '@aws-amplify/ui-react/styles/base.layer.css' // base styling needed for Amplify UI
import '@aws-amplify/ui-react/styles/button.layer.css' // component specific styles
import '@aws-amplify/ui-react/styles.css';

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

root.render( 
  <React.StrictMode>
    <MainPanel/>
  </React.StrictMode>
);





