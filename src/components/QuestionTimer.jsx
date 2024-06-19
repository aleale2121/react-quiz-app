import { useEffect, useState } from "react";
export default function QuestionTimer({ timeout, onTimeOut }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeOut, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevRemTime) => prevRemTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
}
