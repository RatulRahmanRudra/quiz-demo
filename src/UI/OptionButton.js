import '../styles/UI/OptionButton.css';

const OptionButton = ({option, ans, handleClick}) => 
    // const [classVal, setClassVal] = useState("option-container");
  
  
   (
    <button 
      type="button" 
      className="option-container"
      onClick={() => handleClick(option, ans)}
    >
      <h2>{option}</h2>
    </button>
  )

export default OptionButton;