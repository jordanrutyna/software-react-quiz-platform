import { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestionIndex: 0,
  questions,                // short form for 'questions: questions'
  showResults: false,
  answers: shuffleAnswers(questions[0]),
  currentAnswer: '',
}

const reducer = (state, action) => {
  console.log('reducer', state, action);

  switch(action.type) {
    case "SELECT_ANSWER": {
      return {
        ...state,
        currentAnswer: action.payload,
      };
    }
    case "NEXT_QUESTION": {
      const showResults = state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults 
        ? state.currentQuestionIndex 
        : state.currentQuestionIndex + 1;
      const answers = showResults 
        ? [] 
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state, 
        currentQuestionIndex: state.currentQuestionIndex + 1, 
        showResults,
        answers,
        currentAnswer: "",
      };
    }
    case "RESTART": {
      return initialState;
    }
    default: {
      return state;
    }
  }

  // if (action.type === 'NEXT_QUESTION') {
  //   const showResults = state.currentQuestionIndex === state.questions.length - 1;
  //   const currentQuestionIndex = showResults 
  //     ? state.currentQuestionIndex 
  //     : state.currentQuestionIndex + 1;
  //   const answers = showResults 
  //     ? [] 
  //     : shuffleAnswers(state.questions[currentQuestionIndex]);
  //   return {
  //     ...state, 
  //     currentQuestionIndex: state.currentQuestionIndex + 1, 
  //     showResults,
  //     answers,
  //   };
  // }
  // if (action.type === 'RESTART') {
  //   return initialState;
  // }
  // return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);
  console.log("state", value)
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}