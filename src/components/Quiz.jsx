import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import QuestionTimer from "./QuestionTimer.jsx";
import quizCompletImg from "../assets/quiz-logo.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipExpired = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompletImg} alt="Trophy Icon" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }
  console.log("Here");
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeOut={handleSelectAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ol id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
