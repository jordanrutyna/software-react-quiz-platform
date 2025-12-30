import { useState } from 'react';
import Question from './Question'

const Quiz = () => { //arrow function is modern way of writing JS
  console.log("render")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const testClick = () => {
    console.log("test click");
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <div className='quiz'>
      <div>
        <div className='score'>Question 1/8</div>
        <Question />
        <div className='next-button' onClick={testClick}>
          Next question {currentQuestionIndex}
        </div>
      </div>
    </div>
  );
};

export default Quiz;

/* This (useState) works, we're using usestate to store index and update it. 
But what if we have more properties?
Maybe we need to store an array of our questions (usereducer) */
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