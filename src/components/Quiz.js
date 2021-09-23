
import { useEffect, useReducer, useState } from "react";
import { useHistory } from "react-router";
import FetchQuiz from "../API/services/FetchData";
import Loading from "../UI/Loading";
import ResultModal from "../UI/ResultModal";
import QuestionModule from "./QuestionModule";


const initialState = {
  isLoading: true,
  fetchedData: null,
  quizData: []
}

const quizReducer = (quizState, quizAction) => {
  switch (quizAction.type){
    case "FETCH_SUCCESS" :
      return {
        isLoading: false,
        fetchedData: quizAction.payload
      }
    
    case "FETCH_ERROR":
      return {
        isLoading: false,
        fetchedData: null,
        error: quizAction.payload
      }
    
    case "ASSIGN_QUIZDATA" :
      return {
        quizData: quizAction.payload
      }

    default :
      return quizState
  }
}

const Quiz = () =>{
  
  console.log('quiz');

  const history = useHistory();
  const {diff, category} = history.location.state;

  // const [isLoading, setIsLoading] = useState(true); 
  // const [fetchedData, setFetchedData] = useState(null);
  const [current, setCurrent] = useState(0);
  const [points, setPoints] = useState(0);
  const [timeOut, setTimeOut] = useState(false);
  // const [quizData, setQuizData] = useState([]);

  const [quizState, quizDispatch] = useReducer(quizReducer, initialState);

  useEffect(() => {
    
    const apiQuiz = async () => {
      console.log("get request");
      try {        
        const res = await FetchQuiz.getQuiz(category, diff);
        const result = await res.data.results;
        // await setFetchedData(result)
        quizDispatch({
            type: "FETCH_SUCCESS",
            payload: result
        })
      } catch (error) {
        console.log(error);
        quizDispatch({
          type: "FETCH_ERROR",
          payload: error
        })
      }
      // setIsLoading(false);
    }
    apiQuiz();

  }, [diff, category])


  // using state is better
  // const quizData = [];


  //  state from useReducer 
  const {fetchedData, isLoading, quizData} = quizState; 

  useEffect(() => {       // used for shuffeling the quiz options
    if(fetchedData){
      const qData = [];
      fetchedData.forEach(async (data, i) => {
        const quizObj = {
          id: i,
          ques: data.question,
          ans: data.correct_answer,
          options: [...data.incorrect_answers, data.correct_answer]
        }
  
        quizObj.options.sort( () => Math.random() - 0.5 ); // shuffeling the options
  
        await qData.push(quizObj);
  
      });
      // setQuizData(qData);

      /// having problem to set quizdata using reducer.

      quizDispatch({
        type: "ASSIGN_QUIZDATA",
        payload: qData
      });
    }


  }, [fetchedData])

  
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
    setCurrent(current+1)
  }

  const handleClick = (option, ans) => {
    toggleModal();
    setPoints(points+(option===ans))
    setResult(option===ans);
  }
  
  // console.log(fetchedData);


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
          // msg="Test message"
        />
      }
      {!isLoading && 
        < QuestionModule 
          quizData={quizData && quizData[current]} 
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