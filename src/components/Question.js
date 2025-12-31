import Answer from './Answer'
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Question = ({questions}) => { //arrow function is modern way of writing JS
  const [quizState] = useContext(QuizContext) // '{variable}' render variable in markup
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  // console.log('Question', quizState);
  return (
    <div>
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
      </div>
    </div>
  );
};

export default Question;