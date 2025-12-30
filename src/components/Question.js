import Answer from './Answer'

const Question = ({questions}) => { //arrow function is modern way of writing JS
  console.log('Question', questions);
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