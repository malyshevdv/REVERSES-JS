import ButtonRefresh from '../components/ButtonRefresh'


//PICTURES
import png_arrow_up from '../pictures/arrow-up.png';
import png_arrow_down from '../pictures/arrow-down.png';

export default function MenuPanel( {Counts, Steps, Times}){
    return(
      <div className="top-panel titles" height="32px" >
              
              <ButtonRefresh  />
              
              <ParametrLabelWithCFG  id="HeightTitle" LabelText="Height" Value="0"/>
              <ParametrLabelWithCFG  id="WidthTitle" LabelText="Width" Value="0"/>

              
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

function ParametrLabelWithCFG({id, LabelText}){
    return (
    <>
    <span id={id}>{LabelText}: </span>
    <div className="bbr" >
        <img src={png_arrow_up} />    
    </div>
    <div className="bbr" height="16px">
        <img src={png_arrow_down} />    
    </div>
    </>
)}