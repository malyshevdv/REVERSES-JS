import React , {useState} from 'react'

import StarReyting from '../components/StarReyting'
import colorData from "../data/colors.json";
import { FaTrash } from "react-icons/fa";

const myF = (id, newReiting) => {
    //colors.forEach(color, color.id == id? color.reiting = newReiting: 0)
    return 1
}



export default function App() {
    const [colors, setColors] = useState(colorData);
    return (
    <ColorList 
        key='myColorList'
        colors={colors} 
        onRemoveColor = {id => {
            const newColors = colors.filter(color => color.id !== id);
            setColors(newColors);
            }
        }
        onSelectReiting = {(id, rating) => {
            
            //colors.forEach( (color) => {color.id == id ? color.rating = rating: color.rating = color.rating});
            //const newColors = colors.filter(color => color.id !== id);
            const newColors = colors.map(color =>
                color.id === id ? { ...color, rating } : color
                );

            console.log(id);  
            setColors(colors);
            console.log(rating);  
            console.log(colors);  
            setColors(newColors);            
            }
        }
    />
    )
}

function ColorList({colors = [] , onRemoveColor = f => f , onSelectReiting = f=>f}){
    return (
    <>
    
    {colors.map((item, ind) => 
        <Color 
            key ={item.id} 
            id ={item.id} 
            {...item} 
            onRemoveColor = {onRemoveColor}
            onSelectReiting = {onSelectReiting}
        />
    )}
    
    </>)
}
//onRemoveColor = {onRemoveColor}
//onClick={() => onRemove(id)}
//onClick={onRemoveColor(''+id)} 

function Color({id, color, rating, title, onRemoveColor = f => f , onSelectReiting = f =>f}){
    
 return (
    <div >
        <p style={color={color}}>{title}</p>
        
        <button >
               <FaTrash 
               onClick = {() => onRemoveColor(id)}
               />
        </button>

        <StarReyting 
           ColorId = {id}
           TotalStars={7} 
           selectedStars={rating}  
           onSelectReiting = {onSelectReiting}
           style = {{padding :'20px' }}  

        />


    </div>


 )   
}