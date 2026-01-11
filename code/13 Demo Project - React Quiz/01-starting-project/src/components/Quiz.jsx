import React, { useState } from "react";
import questions from "../questions";
import quizCompletingImage from "../assets/quiz-complete.png";

export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handleSelectedAnswer(selectedAnswer) {
    // We wanna update latest version of the state not the lose anything
    // PREV STATE
    setUserAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }

  if (activeQuestionIndex === questions.length) {
    return (
      <div id="summary">
        <img src={quizCompletingImage} alt="Tropy"></img>
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  // This is a method to shuffle the element of an array. This will work because Math rendom will return
  // a number between 0 and 1 and 1 excluded. When u minus 0.5, 50 percent of the options will be positive
  // and rest will be negative. This means either it will return negative or positive and sort the array accordingly.
  const shuffledAnswers = [...questions[activeQuestionIndex].answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div id="quiz ">
      <div id="question">
        <h2>{questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {/* // make sure explicit return or implicit return, block bodies with curly braces does not return auto
        // so you need and implicit return () or explicit return with return syntax */}
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              {/* // We are wrapping with outer function to make sure that React is not calling it with rendering
            // instead by clicking the function is being called.  */}
              <button onClick={() => handleSelectedAnswer()}>{answer}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
