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
      <ul className="mt-2 space-y-4">
        {questions.map((question, index) => (
          <li
            key={index}
            className="flex items-center justify-center cursor-pointer dark:bg-slate-800 bg-white shadow-lg rounded-lg p-4"
            onClick={() => handleQuestionClick(question)}
          >
            <span role="img" aria-label="link" className="mr-2 dark:text-white text-black">
              <IconPlus />
            </span>
            <p className="dark:text-white text-center text-md sm:text-lg font-semibold">{question}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InitialQueries;
