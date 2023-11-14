import React , {useState, useEffect} from 'react'

import MenuPanel from '../components/MenuPanel'
import PolePanel from '../components/PolePanel'
import ResultPanel from '../components/ResultPanel'

import App from '../components/ColorList'
import {ColorProvider} from '../components/color-context'

import {InvertCard, reminesToOpen, GameContext, max_pictures, unsortList, pictureList} from '../components/hooks'

//PICTURES
import png_refresh from '../pictures/refresh.png';
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';
import png_arrow_left from '../pictures/arrow-left.png';
import png_arrow_right from '../pictures/arrow-right.png';


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
function ArrowPush(){
  console.log("TEST ARROW PUSH")
}


export default function CentralPanel(){

  let [dim_width, setWidth] = useState(6);
  let [dim_height, setHeight] = useState(3);
  let pictureCount = () => (Math.floor(dim_width * dim_height/2));

  const [Counts, setCount] = useState(0)
  const [Steps, setStep] = useState(0)
  const [Times, setTime] = useState(0)

  const [buferItems, addToBufer] = useState([], (item) => {buferItems.push(item)})

  

  const [ResultItemTable, addNewResult] = useState([]); //, (newItem) => ResultItemTable.push(newItem) )

  const onClickRestart = () => { 
    
    OnClickRefresh(getfillList());
    setStep(0);
  }


  const getList = () => pictureList.map(
    (item, ind) => ({
        'id' : ind,     // identifier
        'src' : item,   //image source
        'completed' : false,   //false - show card. if true - car is checked and unvisible
        'showCard' : true,   // show card picture, false - show back - no picture
        } 
      )
  )
  const getfillList = () => unsortList(DubleList(filterList(getList())))

  const gameFinished = (ItemList) => (ItemList.filter((item)=>(item.completed === false)).length ===0);
  const DubleList = (myList) => [...myList, ...myList].map((item)=>structuredClone(item))
  
  const filterList = myList => myList.filter((item, ind) => (ind+1)<=(pictureCount()) ? true : false)
  
  


  const onCardClick = (id) => {
    const Finished = CardClick(id, ItemList, Steps, buferItems)
    
    setStep(Steps+1);
    //console.log(id);
    if (gameFinished(ItemList)) {
      addNewResult([...ResultItemTable, 
        {'position': ResultItemTable.length+1, 
        'steps': Steps, 
        'time' : Times, 
        'size' : '' + dim_height + 'x' + dim_width
        }]);
      }
  }

  const onClickUp = (Param1) => {
    if (Param1 === 'Height'){
      const newParam = dim_height + 1;
      if (Math.floor((newParam * dim_width)/2) <= max_pictures) {
        setHeight(newParam);  
        console.log(dim_height,' ', pictureCount())
        onClickRestart();
      }
    }
    
    if (Param1 === 'Width'){
      const newParam = dim_width + 1;
      if (Math.floor((newParam * dim_height)/2) <= max_pictures) {
        setWidth(newParam);  
        console.log(dim_width,' ', pictureCount());
        onClickRestart();
      }
    }
  }

  const onClickDown = (Param1) => {
    if ((Param1 === 'Height') && (dim_height>1)) {
      setHeight(dim_height-1);
      //OnClickRefresh(getfillList());
    }

    if ((Param1 === 'Width') && (dim_width>1)) {
      setWidth(dim_width-1);
      //OnClickRefresh(getfillList());
    }
  }

  const [ItemList, OnClickRefresh] =   useState(getfillList());
  //const ItemList = PoleItems();

  
  
  


  useEffect(()=>{
    OnClickRefresh(getfillList())

  }, [dim_height, dim_width]);






  return (
      <div className='centralpanel'>
         <GameContext.Provider value = {{ItemList, onClickRestart, onCardClick, onClickUp, onClickDown}}>
          
            <MenuPanel 
                Counts={Counts} 
                Steps={Steps} 
                Times = {Times}
                />
            
            <PolePanel 
                
                

            />
            
            <ResultPanel
              ResultItemTable = {ResultItemTable}
            />
            
          </GameContext.Provider>    

          

      </div>
    )
  }

//  <App/>


