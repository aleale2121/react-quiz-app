import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeOut, timeout);
  }, [timeout,onTimeOut]);

  useEffect(() => {
    setInterval(() => {
      setRemainingTime((prevRemTime) => prevRemTime - 100);
    }, 100);
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime}/>;
}
