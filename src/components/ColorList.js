import React , {useState} from 'react'

import StarReyting from '../components/StarReyting'
import colorData from "../data/colors.json";

function App() {
    const [colors] = useState(colorData);
    return <ColorList colors={colors} />;
}

export default function ColorList({colors = []}){
    return (
    <>
    
    {colors.map((item) => 
        <div>1
            <p>{item.title}</p>

            <Color id ={1} {...item}/>
        </div>

    )}
    
    
    
   

    </>)
}

function Color({color, reiting, title}){
 return (
    <div>
        <p style={color={color}}>{title}</p>
        
        <StarReyting 
           TotalStars={7} 
           selectedStars={reiting}  
           style = {{padding :'20px' }}  
        />


    </div>


 )   
}