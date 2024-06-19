import { useState } from "react";
import QUESTIONS from "../questions.js";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
  return (
    <div id="quiz">
      <div className="question">
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ol id="answers">
          {QUESTIONS[activeQuestionIndex].answers.map((answer) => {
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>;
          })}
        </ol>
      </div>
    </div>
  );
}
