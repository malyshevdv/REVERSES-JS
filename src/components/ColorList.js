import React , {useState, createContext, useContext} from 'react'

import StarReyting from '../components/StarReyting'
import ColorForm from '../components/color-form'



import { FaTrash } from "react-icons/fa";

import colorData from "../data/colors.json";

import { v4 } from "uuid";

import {MyContext, useColorContext} from '../components/color-context'
//export const MyContext = createContext();
//export const useColorContext = () => useContext(MyContext);


export default function App() {
    const [colors, setColors] = useState(colorData);
    
    
    const onRemoveColor = id => {
        const newColors = colors.filter(color => color.id !== id);
        setColors(newColors);
        }
    
    
    const onSelectReiting = (id, rating) => setColors( colors.map(color => color.id === id ? { ...color, rating } : color)) 
    
    
    const onNewColor = (title, color) => { 
        const NewColor = {"title" : title, "color" : color, id : v4()}
        setColors([...colors, NewColor])
    }

    return(
        <MyContext.Provider value={{colors, setColors, onRemoveColor, onSelectReiting, onNewColor}}>
            <ColorList></ColorList>
        </MyContext.Provider>
    )

}



export function ColorList(){
    const {colors, MyName} = useColorContext()
    return (
    <>
    <a>ddddsdsds</a>
    {MyName}
        {colors.map((item, ind) => 
            <Color 
                key ={item.id} 
                id ={item.id} 
                {...item} 
            />

        )}

        <ColorForm/>

    </>)
}





function Color({id, color, rating, title}){
    const {onRemoveColor} = useColorContext();    
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
                style = {{padding :'20px' }}  
            />


        </div>
    )   
}