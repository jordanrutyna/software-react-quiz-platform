import { createContext, useReducer } from "react";
import questions from "../data";

const initialState = {
  currentQuestionIndex: 0,
  questions, // short form for 'questions: questions'
}

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    return {...state, currentQuestionIndex: state.currentQuestionIndex + 1};
  }
  return state;
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);
  console.log("state", value)
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}