import { useReducer } from 'react';
import Question from './Question'

const initialState = {
  currentQuestionIndex: 0,
  questions: [],
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};
  }
  return state;
}

const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state", state)
  return (
    <div className='quiz'>
      <div>
        <div className='score'>Question 1/8</div>
        <Question questions={state.questions}/>
        <div className='next-button' onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
          Next question
        </div>
      </div>
    </div>
  );
};

export default Quiz;

/* This (useState) works, we're using usestate to store index and update it. 
But what if we have more properties?
Maybe we need to store an array of our questions (usereducer) */
// import { useState } from 'react';
// const Quiz = () => {
//   console.log("render")
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
//   const testClick = () => {
//     console.log("test click");
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };
//   return (
//     <div className='quiz'>
//       <div>
//         <div className='score'>Question 1/8</div>
//         <Question />
//         <div className='next-button' onClick={testClick}>
//           Next question {currentQuestionIndex}
//         </div>
//       </div>
//     </div>
//   );
// };


// const Quiz = () => { 
//   // Does not work, updates index to zero every click... need states
//   // let questionIndex = 0;
//   // const testClick = () => {
//   //   console.log("test click");
//   //   questionIndex++;
//   // };
//   return (
//     <div className='quiz'>
//       <div>
//         <div className='score'>Question 1/8</div>
//         <Question />
//         <div className='next-button' onClick={testClick}>
//           Next question {currentQuestionIndex}
//         </div>
//       </div>
//     </div>
//   );
// };