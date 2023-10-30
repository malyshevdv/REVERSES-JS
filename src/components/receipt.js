import React , {useState} from 'react'
import ItemItem from './ItemItems'



export default function Receip ({name, ingredients, steps }) {
    
    return(
      <div>
        <h1>{name}</h1>
  
        <ul className='ingredients'>
          <h2
             

          >IngredientsList</h2>
        {ingredients.map( (ingItem, iii) => ( 
           <ItemItem id={iii}  StepItem = {ingItem.name} />  
           
          )    )}
        </ul>
  
        <ul className='steps'>
          <h2>Steps</h2>
        {steps.map((StepItem, iii) => ( 
           
           <ItemItem id={iii}  StepItem = {StepItem} />  
           
           
               )    
          )
          }
        </ul>
  
  
  
  
      </div>
    )
  }