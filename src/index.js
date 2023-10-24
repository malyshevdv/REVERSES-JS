import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './mystyle.css';
//import App from './App';

import png_refresh from './pictures/refresh.png';
import png_arrow_up from './pictures/arrow-up.png';
import png_arrow_down from './pictures/arrow-down.png';
import png_arrow_left from './pictures/arrow-left.png';
import png_arrow_right from './pictures/arrow-right.png';

import pict01 from './pictures/pic01.png';
import pict02 from './pictures/pic02.png';
import pict03 from './pictures/pic03.png';
import pict04 from './pictures/pic04.png';
import pict05 from './pictures/pic05.png';
import pict06 from './pictures/pic06.png';
import pict07 from './pictures/pic07.png';
import pict08 from './pictures/pic08.png';
import pict09 from './pictures/pic09.png';
import pict10 from './pictures/pic10.png';
import pict11 from './pictures/pic11.png';
import pict12 from './pictures/pic12.png';
import pict13 from './pictures/pic13.png';
import pict14 from './pictures/pic14.png';
import pict15 from './pictures/pic15.png';
import pict16 from './pictures/pic16.png';
import pict17 from './pictures/pic17.png';
import pict18 from './pictures/pic18.png';
import pict19 from './pictures/pic19.png';
import pict20 from './pictures/pic20.png';
import pict21 from './pictures/pic21.png';
import pict22 from './pictures/pic22.png';
import pict23 from './pictures/pic23.png';
import pict24 from './pictures/pic24.png';
import pict25 from './pictures/pic25.png';
import pict26 from './pictures/pic26.png';
import pict27 from './pictures/pic27.png';
import pict28 from './pictures/pic28.png';
import { renderIntoDocument } from 'react-dom/test-utils';


let pole = undefined;
let piclist = []
let pictureNumber = 0

let ItemList = []
let SelectedItemList = {}
let SelectedItems = []
let dim_width = 6
let dim_height = 3
let Count = dim_width * dim_height;
let RecordNumber = 0;
let pictureCount = Math.floor(dim_width * dim_height/2)
let item_count = 2 * pictureCount
let ClickNumber = 0
let TimerCount = 0;
let myTimer = 0; //setInterval(showTimer, 1000);
const maxCount = 28*2;
const maxWidth = 6;

let reversInterval = 0;

clearInterval(myTimer)


//setInterval(Refill(), 1000);

function ClickButton(CommandName){

  let old_height = dim_height;
  let old_width = dim_width;

  if (CommandName == 'ReFill') {
      Refill();
  }
  else if (CommandName == 'HeightUp') {
      dim_height +=1;
  }
  else if (CommandName == 'HeightDown') {
      if (dim_height>1){dim_height -=1}
  }
  else if (CommandName == 'WidthtUp') {
      if (dim_width<6){dim_width +=1}
  }
  else if (CommandName == 'WidthDown') {
      if (dim_width>1){dim_width -=1}
  }

  Count = dim_width * dim_height;
  pictureCount = Math.floor(dim_width * dim_height/2)

  if (pictureCount>28){
      dim_height = old_height;
      dim_width = old_width;

      Count = dim_width * dim_height;
      pictureCount = Math.floor(dim_width * dim_height/2)
     
  }

  UpdateTitles();
  Refill();

}


function Refill(){

  clearPole();

  pole = document.getElementById('pole');

  ItemList = []
  
  piclist = getListNumber(28);
  
  item_count = dim_width * dim_height
  pictureCount = Math.floor(dim_width * dim_height/2)
  item_count = 2 * pictureCount

  for (let i=1; i<=pictureCount;i++){
      piclist = shiftN(piclist, Math.floor(Math.random() * (piclist.length-1)))
      pictureNumber = piclist.shift()
      
      let newItem = {
          'pictureNumber': pictureNumber, 
          'pictureName': 'pic' + pictureNumber + '.png',
          'ItemID' : '',
          'ItemPictureID' : ''
          
      }
      let newItem2 = {
          'pictureNumber': pictureNumber, 
          'pictureName': 'pic' + pictureNumber + '.png',
          'ItemID' : '',
          'ItemPictureID' : ''
          
      }
      
      ItemList.push(newItem)
      ItemList.push(newItem2);
  }

  ItemList = unsortList(ItemList)

 
  for (let i = 1; i <= ItemList.length; i++){

      let Item = ItemList[i-1];
      
      let ItemID = 'Item' + i
      if (i<10) {
          ItemID = 'Item0' + i
      }
      
      ItemList[i-1].ItemID = ItemID;
      ItemList[i-1].ItemPictureID = ItemID + '.pict';

      
      let Ob = document.createElement('div');
      Ob.setAttribute('id', ItemID)
      Ob.setAttribute('pictureid', ItemList[i-1].ItemPictureID)
      Ob.className = "unit"
      Ob.setAttribute('selected', 'false');
      Ob.setAttribute('checked', 'false');
      Ob.setAttribute('showpic', 'false');
      Ob.setAttribute('pictureNumber', Item.pictureNumber)
      
      let ObPict = document.createElement('img');
      ObPict.setAttribute('id', ItemList[i-1].ItemPictureID);
      ObPict.setAttribute('src', Item.pictureName);
      ObPict.className = 'unit-pict'

      Ob.appendChild(ObPict)
      pole.appendChild(Ob)

      Ob.setAttribute('onClick', 'PushItem(id)');
  }
  
  ClickNumber = 0;
  clearInterval(myTimer);
  TimerCount = 0;

  UpdateTitles();

}


function UpdateTitles(){
  document.getElementById('ClickNumber').innerHTML = 'Steps:' + ClickNumber
  document.getElementById('TimerCount').innerHTML = 'Time:' + TimerCount
  document.getElementById('Count').innerHTML = 'Count:' + Count

}

function showTimer(){
  TimerCount +=1;
  UpdateTitles()
  if (TimerCount>5000){
      clearInterval(myTimer); 
  }
}

function getListNumber(maxNumber){
  let myList = []

  for (let i=1; i <=maxNumber; i++){
      let ItemID = ''+ i;
      if (i<10) {ItemID = '0'+ ItemID}
      myList.push(ItemID)
  }
  return myList        
}

function shiftN(myArray, N){
  let dd = [...myArray]
  for (let i=1; i<=N; i++){
      dd.push(dd.shift())
  }
  return dd
}

function unsortList(myList){
  let dd = [...myList]
  let newList = []
  let myStep = 0

  while (dd.length>0){
      myStep = Math.floor(Math.random() * (dd.length-1)) 
      dd = shiftN(dd, myStep)
      newList.push(dd.shift())



  }

  return newList

}

function clearPole(){
  
  Count = dim_width * dim_height;
  
  pole = document.getElementById('pole')

  /*let dd = pole.querySelectorAll()
  for (let Item of ItemList) {
      let ob = document.getElementById(Item.ItemID)
      if (ob != undefined) {
          pole.removeChild(ob)
      }    
      else{
          console.log('Cannot find ' + Item.ItemID);
      }
  }
*/
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function PushItem(id){

  SelectedItems = document.querySelectorAll("[selected = 'true']")

  ClickNumber +=1;

  if (ClickNumber == 1) {
      UnselectCards();
  }
  
  let Ob = document.getElementById(id);
  let selected = Ob.attributes['selected'].value;
  
  if (SelectedItems.length >= 2) {

      SelectedItems.forEach((item, ind, arr) => {
      UnselectCard(item.id);     
      })
  }

  
  if (selected == 'true') {
      Ob.setAttribute('selected','false')
      let pict = document.getElementById('' + id + '.pict');
      pict.setAttribute('src','Unselected.png')
      
  }
  else {
      Ob.setAttribute('selected','true')
      let pict = document.getElementById('' + id + '.pict');
      let picName = 'pic' + Ob.attributes['pictureNumber'].value  + '.png'
      pict.setAttribute('src',picName);

      if (ClickNumber ==1){
          myTimer = setInterval(showTimer, 1000);
      }
  }
  
  SelectedItems = document.querySelectorAll("[selected = 'true']")


  if (SelectedItems.length >= 2) {
      if (SelectedItems[0].getAttribute('pictureNumber') == SelectedItems[1].getAttribute('pictureNumber')) {
              for (let Item of SelectedItems) {
                  Item.setAttribute('checked', 'true');
                  Item.setAttribute('selected', '');
                  Count -=1;    
              } 
          SelectedItems = [];


          if (Count == 0){
              clearInterval(myTimer);
              RecordNumber += 1;
              let container = document.getElementById('tableResult');
              
              let myTr = document.createElement('tr');
              
              let myTd = document.createElement('td');
              myTd.innerHTML = '' + RecordNumber;
              myTr.appendChild(myTd);

              myTd = document.createElement('td');
              myTd.innerHTML = '' + ClickNumber;
              myTr.appendChild(myTd);

              myTd = document.createElement('td');
              myTd.innerHTML = '' + TimerCount;
              myTr.appendChild(myTd);

              myTd = document.createElement('td');
              myTd.innerHTML = '' + dim_width + ' x ' + dim_height;
              myTr.appendChild(myTd);

              container.appendChild(myTr);

          }

      }
      else
      {
          setTimeout(() => {
              if (SelectedItems.length >= 2) {
                  UnselectCards();    

                  SelectedItems.forEach((item, ind, arr) => {
                      UnselectCard(item.id);     
                      
                  }) 
              }        
              
          }, 1000);
          
      }
  }
  else{
      //clearInterval(reversInterval)
  }

  console.log(SelectedItems.length)        

  UpdateTitles();

}

function UnselectCards(){
  for (let Item of ItemList){
      let pict = document.getElementById(Item.ItemPictureID);
      pict.setAttribute('src', 'Unselected.png');

      pict = document.getElementById(Item.ItemID);
      pict.setAttribute('selected', 'false');
      
  }
}

function UnselectSelectedCards(){
  SelectedItems = document.querySelectorAll("[selected = 'true']")
  SelectedItems.forEach((item, ind, arr) => {
          UnselectCard(item.id);   
  }) 
}    


function UnselectCard(id){
  let Ob = document.getElementById(id);
  Ob.setAttribute('selected', 'false');
  
  let pict = document.getElementById(Ob.getAttribute('pictureid'));
  pict.setAttribute('src','Unselected.png');
}

function CheckCard(id){
  let Ob = document.getElementById(id);
  Ob.setAttribute('checked', 'true');
  Ob.setAttribute('selected', '');
  
}

function ChangeWidth(){
  dim_width = document.getElementById('pole-width').valueAsNumber
  Refill()
}
function ChangeHeight(){
  dim_height = document.getElementById('pole-height').valueAsNumber
  Refill()
}


function LeftPanel(){
  return ( 
<div className="leftpanel"></div>
  )
}

function MenuPanel(){
  return(
    <div className="top-panel titles" height="32px">
            
            <div className="button" onClick = 'ClickButton("ReFill")' height="32px">
                <img src={png_refresh} width="23px" height="23px" />
                RESTART
                
            </div>
            <span id="HeightTitle">Height: </span>
            <div className="bbr" onclick='ClickButton("HeightUp")' >
                <img src={png_arrow_up} />    
            </div>
            <div className="bbr" onclick='ClickButton("HeightDown")' height="16px">
                <img src={png_arrow_down} />    
            </div>
            
            <span id="WidthTitle">Width: </span>
            <div className="bbr" onclick='ClickButton("WidthtUp")' >
                <img src={png_arrow_up} />    
            </div>
            <div className="bbr" onclick='ClickButton("WidthDown")' height="16px">
                <img src={png_arrow_down} />    
            </div>
            
        
            <span id="ClickNumber"> Steps: 0</span>
            <span id="TimerCount"> Time: 0</span>
            <span id="Count"> Count:</span>
            
        </div>
  )
}

function ResultPanel(){
  return (
    <div class="down-panel">
            <p>RESULT TABLE</p>

            <table border="1px" id="tableResult">
                <tr>
                    <th width="20rem">Position</th>
                    <th width="120rem">Steps</th>
                    <th width="120rem">Time</th>
                    <th width="120rem">Size</th>
                </tr>
                
            </table>


        </div>

  )
}

function PolePanel(){
  return (
<div id='pole' class="pole">
        </div>
  )
}


function CentralPanel(){
  return (
    <div className='centralpanel'>

        <MenuPanel/>
        
        <PolePanel/>
        
        <ResultPanel/>

    </div>
  )
}

function RightPanel(){
  return (
<div class="rightpanel"></div>
  )
}

function main() {
return (
<div class="workplace">
    <LeftPanel />
    
    <CentralPanel />

</div>

)}




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render([main()]
);


