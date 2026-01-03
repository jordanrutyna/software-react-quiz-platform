import Answer from './Answer'
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Question = ({questions}) => { //arrow function is modern way of writing JS
  const [quizState] = useContext(QuizContext) // '{variable}' render variable in markup
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  console.log('currentQuestion', currentQuestion);
  // console.log('Question', quizState);
  /* we don't want to make our answer component stateful, meaning inside Answer.js we 
  won't subscribe for our state for two reasons. 
      <div className='answers'>
        <Answer/>
        <Answer/>
        <Answer/>
        <Answer/>
      </div>
  1. You can see we are rendering four elements, meaning we don't know exactly what 
     answer we are rendering. So we'll do it with a loop.
  2. Every line with useContext is actually a subscription for our state, meaning if 
     you have 1000 elements and you have subscriptions in every one of them your app
     won't be very performant.
  So in components where you are rendering with a loop, like answers, you should not 
  subscribe to the state. 
  */
  return ( //in react to render an array always need to use map like this
    <div>
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'> 
        {quizState.answers.map((answer, index) => (
          <Answer answerText={answer} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Question;