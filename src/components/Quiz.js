
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import FetchQuiz from "../API/services/FetchData";
import Loading from "../UI/Loading";
import ResultModal from "../UI/ResultModal";
import QuestionModule from "./QuestionModule";

const Quiz = () =>{
  
  console.log('quiz');

  const history = useHistory();
  const userInputs = {...history.location.state};
  // console.log(userInputs)

  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [current, setCurrect] = useState(0);
  const [points, setPoints] = useState(0);
  const [timeOut, setTimeOut] = useState(false);

 

  useEffect(() => {
    
    const apiQuiz = async () => {
      setIsLoading(true);
      console.log("get request");
      const {diff, category} = {...history.location.state};
      console.log(category, diff);
      try {
        // const url = `https://opentdb.com/api.php?amount=10&type=multiple&category=${category}&difficulty=${diff}`
        
        const res = await FetchQuiz.getQuiz(category, diff);
        const result = await res.data.results;
        await setFetchedData(result)
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    apiQuiz();

  }, [history.location.state])


  const quizData = [];
  
  if(fetchedData){
    fetchedData.forEach(async (data, i) => {
      const quizObj = {
        id: i,
        ques: data.question,
        ans: data.correct_answer,
        options: [...data.incorrect_answers, data.correct_answer]
      }

      quizObj.options.sort( () => Math.random() - 0.5 ); // shuffeling the options

      await quizData.push(quizObj);

    });
  }

  
  const [clicked, setClicked] = useState(false);
  const [result, setResult] = useState(false);

  const toggleModal = () => {
    setClicked(!clicked);
    // console.log(clicked);
  }
  const toggleTimeout = () =>{
    setTimeOut(true)
  }

  const nextQuiz = () =>{
    setCurrect(current+1)
  }

  const handleClick = (option, ans) => {
    toggleModal();
    setPoints(points+(option===ans))
    setResult(option===ans);
  }
  
  console.log(fetchedData);


  return (
    
    
    <div className="quiz-container">
     
      {isLoading && <Loading/>}

      {
        clicked && 
        <ResultModal 
          nextQuiz={nextQuiz}
          toggleModal={toggleModal}
          result={result}
          ans={quizData[current].ans} 
          userName={userInputs.userName} 
          score={points}
          timeOut={timeOut}
          // msg="Test message"
        />
      }
      {!isLoading && 
        < QuestionModule 
          quizData={quizData[current]} 
          handleClick={handleClick} 
          nextQuiz={nextQuiz}
          time={100}      
          toggleTimeOut={toggleTimeout}
          timeOut={timeOut}
          clicked={clicked}
          score={points}
        />}
    </div>

  )
}

export default Quiz;