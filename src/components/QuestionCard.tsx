import React from 'react';

type QCardProps = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QCardProps> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <div>
    <p className="number">
      {' '}
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}} />
  </div>
);

export default QuestionCard;
