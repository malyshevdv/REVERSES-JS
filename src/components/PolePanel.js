import React, {useState} from 'react'

import Card from '../components/card'

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
        'id' : ind, 
        'src' : item, 
        'showCard' : true, 
        'visible' : true})
)



const DubleList = (myList) => [...myList, ...myList]

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

//======= POLE ================

export default function PolePanel({setStep}){

    const [ItemList, OnClickRefresh] =   useState(unsortList(DubleList(getList())) , ()=>  unsortList(DubleList(getList())) );
    let [dim_width, setWidth] = useState(6);
    let [dim_height, setHeight] = useState(3);
    let pictureCount = Math.floor(dim_width * dim_height/2);

    return (
        <div id='pole' className="pole">
            {ItemList.map((item, ind)=>    
            <Card 
                key={ind} 
                id={ind} 
                pictureid={item.id} 
                checked='false' 
                showpic='false' 
                
                picturesrc={item.src} 
                setStep = {setStep}
                />    
            )}
            
        </div>
    )
}

