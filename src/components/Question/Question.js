import React, { useState } from 'react';
import './Question.css';

export default function Question({ question, answer }) {
  const [answerShown, setAnswerShown] = useState(false);

  const showAnswer = () => {
    setAnswerShown(!answerShown);
  }

  return (
    <button className="question" onClick={showAnswer}>
      <h2>{question}</h2>
      { answerShown ? <p>{answer}</p> : <></> }
    </button>
  )
}