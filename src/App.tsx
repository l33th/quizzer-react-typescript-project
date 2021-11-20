import React from 'react';
// Components
import QuestionCard from './components/QuestionCard';

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {

  }

  return (
    <div>
      <h1>Anime Quiz</h1>
      <button className='start' onClick={startTrivia}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Question ...</p>
      <QuestionCard/>
      <button className='next' onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default App;
