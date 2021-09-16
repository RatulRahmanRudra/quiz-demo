import { useEffect, useState } from "react";
import '../styles/UI/Timer.css';

const Timer = ({time, clicked, nextQuiz, toggleTimeOut }) => {
  console.log('Timer');
  const [timeRem, setTimeRem] = useState(time);

  

  useEffect(() => {
    const timer = () => {
      if(timeRem>0 && !clicked)setTimeRem((prev )=> prev-1);
    }
    const interval = setInterval(timer, 1000);
    if(timeRem===0){
      // alert('timeup!')
      toggleTimeOut();
      nextQuiz();
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [clicked, nextQuiz, time, timeRem, toggleTimeOut])



  return (
    <div className="time-container">
      {timeRem}
    </div>
  )

} 

export default Timer;