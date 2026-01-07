import { useContext, useEffect } from 'react'; // add useEffect for api 
import Question from './Question'
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiURL = "https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple&encode=url3986"
  // console.log('quizState', quizState);
  
  useEffect(() => { // add for api 
    if (quizState.questions.length > 0) { // add check for restart button to work
      return;
    }
    console.log('on initialize');

    fetch(apiURL)
      .then(res => res.json())
      .then(data => {
        console.log("data", data);
        dispatch({ type: "LOADED_QUESTIONS", payload: data.results });
      });
  }); // change from }, []); for restart button to work (removed empty array)

  return (
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>Congratulations</div>
          <div className='results-info'>
            <div>You have completed the quiz!</div>
            <div>You've got {quizState.correctAnswersCount} of {quizState.questions.length}</div>
          </div>
          <div className='next-button' onClick={() => dispatch({ type: "RESTART"})}>Restart</div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && ( /* added for api quizState.questions.length > 0 && */
        <div>
          <div className='score'>Question {quizState.currentQuestionIndex + 1}/{quizState.questions.length}</div>
          <Question />
          <div className='next-button' onClick={() => dispatch({type: 'NEXT_QUESTION'})}>
            Next question
          </div>
        </div>
      )}
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