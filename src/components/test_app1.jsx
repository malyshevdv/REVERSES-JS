import React , {useState, createContext, useContext, memo, useEffect} from 'react'

import StarReyting from './StarReyting'
import ColorForm from './color-form'



import { FaTrash } from "react-icons/fa";

import colorData from "../data/colors.json";

import { v4 } from "uuid";

import {MyContext, useColorContext} from './color-context'
//export const MyContext = createContext();
//export const useColorContext = () => useContext(MyContext);


const Color3 = memo(Color2, (newProps, oldProps) => (newProps.title === oldProps.title))
const Color = memo(Color2, () => true)

export default function App1() {
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
            
            <GitUserInfo/>

            <ColorList></ColorList>

        </MyContext.Provider>
    )

}

function GitUserInfo({username}){
    const [data, setName] = useState('DeniskaRediska');

    useEffect(()=>{

        fetch('https://api.github.com/users/malyshevdv',)
        //.then((val)=>{setName('answer'+val)})
        .then(response => response.json())
        .then(setName)
        .catch(console.error)


    }, [])

    if (data) {
        return (
            <>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <p>{data.name}</p>
            </>
        )    
    }

return null

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





function Color2({id, color, rating, title}){
    const {onRemoveColor} = useColorContext();   
    
    useEffect(()=>{
        console.log(title);     
    })
    
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

