// import { useState } from 'react';
import '../styles/components/QuestionModule.css';
import OptionButton from '../UI/OptionButton';

const QuestionModule = ( {quizData} ) => {
  // const {ques, options, id, ans} = quizData;
  if(quizData)console.log('quesModule', quizData);
  // console.log(ques, options, id, ans);


    


  return (
    // <h1>ques</h1>
    
      <div id="quiz-container">
      { quizData && <h3 className="quiz-number">{quizData.id+1}/10</h3> }
      { quizData && <h2>Q. {quizData.ques} </h2> }
      { quizData && <div className="options"> 
        { 
          quizData.options.map( (option) => 
            <OptionButton 
              option={option} 
              ans={quizData.ans}
              key={option} 
            />
          )
        }
      </div>}
    </div>
  )
}
    
export default QuestionModule;