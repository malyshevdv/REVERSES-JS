import React , {useState} from 'react'

import MenuPanel from '../components/MenuPanel'
import PolePanel from '../components/PolePanel'
import ResultPanel from '../components/ResultPanel'

import App from '../components/ColorList'




export default function CentralPanel(){
  
  const [Counts, setCount] = useState(0)
  const [Steps, setStep] = useState(0)
  const [Times, setTime] = useState(0)

    return (
      <div className='centralpanel'>
  
          <MenuPanel Counts={Counts} Steps={Steps} Times = {Times}/>
          
          <PolePanel setStep= {setStep} setCount={setCount} setTime = {setTime}/>
          
          <ResultPanel/>
          
          <App/>

      </div>
    )
  }

  

