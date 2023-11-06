import ButtonRefresh from '../components/ButtonRefresh'


//PICTURES
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';

export default function MenuPanel( {Counts, Steps, Times, onClickRestart = f => f, onClickArrowButton = ff => ff}){
    return(
      <div className="top-panel titles" height="32px" >
              
              <ButtonRefresh 
                onClickRestart = {onClickRestart}
              />
              
              <ParametrLabelWithCFG  
                key="HeightTitle" 
                id="HeightTitle" 
                LabelText="Height" 
                Value="0"
                onClickArrowButton = {onClickArrowButton}
              />
              <ParametrLabelWithCFG  
                key="WidthTitle" 
                id="WidthTitle" 
                LabelText="Width" 
                Value="0"
                onClickArrowButton = {onClickArrowButton}
              />

              
              <ParametrLabel id="ClickNumber" LabelText="Steps" Value={Steps} />
              <ParametrLabel id="TimerCount" LabelText="Time" Value={Times} />
              <ParametrLabel id="Count" LabelText="Count" Value={Counts} />
              
          </div>
    )
  }

function ParametrLabel({id, LabelText, Value}){
    return (
        <span id={id}> {LabelText}: {Value}</span>
    )
}

function ParametrLabelWithCFG({id, LabelText, onClickArrowButton = f => f}){
    return (
    <>
        <span id={id}>{LabelText}: </span>
        <div className="bbr" onClick = {onClickArrowButton("ddd","sss")} >
            <img src={png_arrow_up} />    
        </div>
        
    </>
)}
/*
<div className="bbr" height="16px">
            <img src={png_arrow_down} />    
        </div>
*/        