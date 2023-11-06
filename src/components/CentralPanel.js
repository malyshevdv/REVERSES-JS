import React , {useState} from 'react'

import MenuPanel from '../components/MenuPanel'
import PolePanel from '../components/PolePanel'
import ResultPanel from '../components/ResultPanel'

import App from '../components/ColorList'

//PICTURES
import png_refresh from '../pictures/refresh.png';
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';
import png_arrow_left from '../pictures/arrow-left.png';
import png_arrow_right from '../pictures/arrow-right.png';

import pict01 from '../pictures/pic01.png';
import pict02 from '../pictures/pic02.png';
import pict03 from '../pictures/pic03.png';
import pict04 from '../pictures/pic04.png';
import pict05 from '../pictures/pic05.png';
import pict06 from '../pictures/pic06.png';
import pict07 from '../pictures/pic07.png';
import pict08 from '../pictures/pic08.png';
import pict09 from '../pictures/pic09.png';
import pict10 from '../pictures/pic10.png';
import pict11 from '../pictures/pic11.png';
import pict12 from '../pictures/pic12.png';
import pict13 from '../pictures/pic13.png';
import pict14 from '../pictures/pic14.png';
import pict15 from '../pictures/pic15.png';
import pict16 from '../pictures/pic16.png';
import pict17 from '../pictures/pic17.png';
import pict18 from '../pictures/pic18.png';
import pict19 from '../pictures/pic19.png';
import pict20 from '../pictures/pic20.png';
import pict21 from '../pictures/pic21.png';
import pict22 from '../pictures/pic22.png';
import pict23 from '../pictures/pic23.png';
import pict24 from '../pictures/pic24.png';
import pict25 from '../pictures/pic25.png';
import pict26 from '../pictures/pic26.png';
import pict27 from '../pictures/pic27.png';
import pict28 from '../pictures/pic28.png';

const pictureList = [pict01,pict02,pict03,pict04,pict05,pict06,pict07,pict08,pict09,pict10,
    pict11,pict12,pict13,pict14,pict15,pict16,pict17,pict18,pict19,pict20,
    pict21,pict22,pict23,pict24,pict25,pict26,pict27,pict28]


const getList = () => pictureList.map(
    (item, ind) => ({
        'id' : ind,     // identifier
        'src' : item,   //image source
        'completed' : false,   //false - show card. if true - car is checked and unvisible
        'showCard' : true,   // show card picture, false - show back - no picture
        } 
      )
)

const filterList = myList => myList.filter((item, ind) => ind<10?true:false)


const DubleList = (myList) => [...myList, ...myList].map((item)=>structuredClone(item))


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


const getfillList = () => unsortList(DubleList(filterList(getList())))

const reminesToOpen = (ItemList) => ItemList.filter((item)=>(item.completed === false && item.showCard === true));

const gameFinished = (ItemList) => (ItemList.filter((item)=>(item.completed === false)).length ===0);


function InvertCard(id, ItemList){
  
  if (ItemList[id]['completed'] === false) {

    let openedListBefore = reminesToOpen(ItemList)
    
    if (openedListBefore.length>=2) {
        openedListBefore.map((item) => item['showCard'] = false)
    }

    ItemList[id]['showCard'] = !ItemList[id]['showCard'];
    let openedListAfter = reminesToOpen(ItemList)
    
    if (openedListAfter.length>=2) {
      if (openedListAfter[0].id === openedListAfter[1].id){
        openedListAfter.map((item) => {
          item['completed'] = true; 
          item['showCard'] = false
          //console.log('complete ' + id)
          })
      }
    }
    
    if (openedListAfter.length>=3 && openedListBefore.length>=2) {
         openedListBefore.map((item) => { item['showCard'] = false})
    
  }
  }

}


//   CARD CLICK



function CardClick(id, ItemList, Steps, buferItems){
  
  let Result = false;

  if (Steps===0) {
    for (let i=0; i<ItemList.length; i++){
      if (i !==id) {ItemList[i].showCard = false}
    }
    buferItems.push(id);  
  }             
  else{
    InvertCard(id, ItemList, buferItems);
  } 
  Result = (reminesToOpen(ItemList).length === 0);
  return Result;

}


export default function CentralPanel(){
  
  const [Counts, setCount] = useState(0)
  const [Steps, setStep] = useState(0)
  const [Times, setTime] = useState(0)

  const [buferItems, addToBufer] = useState([], (item) => {buferItems.push(item)})

  const [ItemList, OnClickRefresh] =   useState(getfillList());
  const [ResultItemTable, addNewResult] = useState([]); //, (newItem) => ResultItemTable.push(newItem) )
  
  let [dim_width, setWidth] = useState(6);
  let [dim_height, setHeight] = useState(3);
  let pictureCount = Math.floor(dim_width * dim_height/2);

    return (
      <div className='centralpanel'>
          
          
          <MenuPanel 
              Counts={Counts} 
              Steps={Steps} 
              Times = {Times}
              onClickRestart = { 
                () => {
                  OnClickRefresh(getfillList()) ;
                  setStep(0);
                }
              }

              onClickArrowButton = {() => console.log("UPER")}
                
              />
          
          <PolePanel 
              ItemList = {ItemList}
              onCardClick = {(id) => {
                const Finished = CardClick(id, ItemList, Steps, buferItems)
                
                setStep(Steps+1);
                //console.log(id);
                if (gameFinished(ItemList)) {addNewResult([...ResultItemTable, {'position': ResultItemTable.length+1, 'steps':Steps, 'time': Times, 'size': ''+dim_height+'x'+dim_width}]);}
              }}
              

          />
          
          <ResultPanel
            ResultItemTable = {ResultItemTable}
          />
          
          
          

      </div>
    )
  }

//  <App/>


