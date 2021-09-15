// import { useState } from 'react';
import '../styles/components/QuestionModule.css';
import OptionButton from '../UI/OptionButton';

const QuestionModule = ( {quizData} ) => {
  const {ques, options, id, ans} = quizData;
  // console.log(ques, options);



    


    return (
      <div id="quiz-container">
      <h3 className="quiz-number">{id+1}/10</h3>
      <h2>Q. {ques} </h2>
      <div className="options">
        { options &&
          options.map( (option) => 
            <OptionButton 
              option={option} 
              ans={ans}
              key={option} 
            />
          )
        }
      </div>
    </div>
  )

    }
export default QuestionModule;