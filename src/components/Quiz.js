
import { useEffect, useState } from "react";
import FetchQuiz from "../API/services/FetchData";
import Loading from "../UI/Loading";
import QuestionModule from "./QuestionModule";

const Quiz = () =>{
  
  console.log('quiz');

  const [isLoading, setIsLoading] = useState(false);

  const [fetchedData, setFetchedData] = useState(null);
 
  
  useEffect(() => {

    const apiQuiz = async () => {
      setIsLoading(true);
      console.log("get request");
      try {
        const res = await FetchQuiz.getQuiz()
        const result = res.data.results;
        await setFetchedData(result)
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
    
    apiQuiz();
  }, [])


  const quizData = [];
  
  if(fetchedData){
    fetchedData.forEach(async (data, i) => {
      const quizObj = {
        id: i,
        ques: data.question,
        ans: data.correct_answer,
        options: [...data.incorrect_answers, data.correct_answer]
      }

      quizObj.options.sort( () => Math.random() - 0.5 );


      await quizData.push(quizObj);

    });
  }

    // console.log(quizData[0].ques);
  

  return (
    <div>

      {isLoading && <Loading/>}
      {!isLoading && quizData && <QuestionModule quizData={quizData[1]} />}
    </div>
  )
}

export default Quiz;