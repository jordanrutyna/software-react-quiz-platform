const Answer = ({answerText}) => { //arrow function is modern way of writing JS
  return ( //Round brackets to write markup on several lines
    <div className="answer">
      <div className="answer-letter">A</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;