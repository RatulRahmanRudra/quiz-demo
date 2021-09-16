import '../styles/UI/ResultModal.css';


const ResultModal = ({toggleModal, nextQuiz, ans, result}) => {
  console.log('result modal');

  const message = result ? "correct" : "incorrect";
  
  const handleNextClick = () => {
    toggleModal();
    nextQuiz();
  }

  console.log(`result = ${result}`);
  console.log(`ans = ${ans}`);
  
  return(
      
      <div className="modal-container">
          <div className="modal-content">
            <div className="doc-container">  
              <h1>{message}</h1>
              {!result && <h1>correct ans is {ans}</h1> }
              <button
                type="button"
                onClick={() => handleNextClick()}
              >next</button>
            </div>
          </div>
      </div>
    
  )
}

export default ResultModal;