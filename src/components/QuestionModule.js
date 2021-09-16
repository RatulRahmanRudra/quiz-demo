import { useHistory } from 'react-router';
import '../styles/components/QuestionModule.css';
import OptionButton from '../UI/OptionButton';
import Timer from '../UI/Timer';

const QuestionModule = ( {quizData, handleClick, score, nextQuiz, clicked, time, timeOut, toggleTimeOut} ) => {
  
  console.log('quesModule');  
  const history = useHistory();
  
  const handlePlayAgain = () =>{
    history.push('/');
  }  

  const userInputs = {...history.location.state};
  
  return (
    <>
      { quizData &&
          <Timer 
          time={time} 
          nextQuiz={nextQuiz}
          clicked={clicked}
          toggleTimeOut={toggleTimeOut}
          quizData={quizData}
      />
     }
      <div id="quiz-container">
          { !quizData ? 
            (
              <div className="score-container">
                {timeOut && <h1>Timeout!!!</h1>}
                <h2>thanks for taking the quiz </h2> 
                <em>{userInputs.userName}</em>
                <h2>your score is {score}/10</h2> 
                <button
                  type="button"
                  onClick={() => handlePlayAgain()}
                >Play Again</button>
              </div>            
            ) : ( 
              <div className="ques-and-options">
                <h3 className="quiz-number">{quizData.id+1}/10</h3> 
                <h2>Q. {quizData.ques} </h2>  
                <div className="options"> 
                  { 
                    quizData.options.map( (option) => 
                      <OptionButton 
                        option={option} 
                        ans={quizData.ans}
                        key={option}
                        handleClick={handleClick}
                      />
                    )
                  }
                </div>
              </div>
            )
          }
      </div>
    </>
  )
}
    
export default QuestionModule;