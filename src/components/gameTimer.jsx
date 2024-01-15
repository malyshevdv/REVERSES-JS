import React , {useState, useEffect} from 'react'

export const GameTimer = () => {
    const [Times, setTime] = useState(0)
    
    const StartTimer = () => {
        console.log('Start timer');
        setInterval(()=> setTime(Times+1), 1000)
    };

    const RestartTimer = () => {
      console.log('Set timer to 0');
      setTime(0)
    }
  
    const StopTimer = () => {
      console.log('Stop timer');
      clearInterval();
    }
  
    useEffect(()=>{
      
  
      return (() => {console.log('end timer')})
    })
  
    return [Times, RestartTimer, StopTimer, StartTimer]
  }