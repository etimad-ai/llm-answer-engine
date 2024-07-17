import React from 'react';
import { IconPlus } from '@/components/ui/icons';

interface InitialQueriesProps {
  questions: string[];
  handleFollowUpClick: (question: string) => void;
}

const InitialQueries = ({ questions, handleFollowUpClick }: InitialQueriesProps) => {
  const handleQuestionClick = (question: string) => {
    handleFollowUpClick(question);
  };
  
  return (
    <div className="mb-5">
      <ul className="mt-2 grid grid-cols-2 gap-4">
        {questions.map((question, index) => (
          <li
            key={index}
            className="flex items-center justify-center cursor-pointer dark:bg-slate-800 bg-white shadow-lg rounded-lg p-4"
            onClick={() => handleQuestionClick(question)}
          >
            <p className="dark:text-white text-center text-md">{question}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InitialQueries;
