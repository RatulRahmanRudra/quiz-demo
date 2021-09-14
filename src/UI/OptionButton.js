import { useState } from 'react';
import '../styles/UI/OptionButton.css';

const OptionButton = ({option, ans}) => {
  const [classVal, setClassVal] = useState("option-container");
  
  const handleClick = () => {
    console.log('clicked')
    if(option === ans){
      setClassVal("correct")
    }else{
      setClassVal("incorrect")
    }
  }
  
  return (
    <button 
      type="button" 
      className={classVal}
      onClick={() => handleClick()}
    >
      <h2>{option}</h2>
    </button>
  )
}
export default OptionButton;