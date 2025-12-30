import Answer from './Answer'

const Question = () => { //arrow function is modern way of writing JS
  return (
    <div>
      <div className='question'>Text of Question</div>
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