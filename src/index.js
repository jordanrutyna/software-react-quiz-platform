import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import Quiz from './components/Quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Quiz />
//   </React.StrictMode>
// );
// ^^Strict Mode (runs application twice--duplicate console logs and button actions)

root.render(<Quiz />);
// ^^ No Strict Mode:


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import Quiz from './components/Quiz';

// ReactDOM.render(
//   <React.StrictMode>
//     <Quiz />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

/* 

React StrictMode finds errors inside application,
The main problem is that react renders our application twice because of this strict mode, 
and it is doing it only in development mode, not in production, 
which essentially means you might see duplicates in your console logs, 
or you click on a button and something happens twice.
If this is confusing for you, you can simply remove here strict mode from our application and just
leave here our quiz and render it inside root:

ReactDOM.render(<Quiz />, document.getElementById('root'));

*/

// Point here is that components inside React return markup

// function App() {
//   return (
//     <div>Hello React</div>
//   );
// }

// Equivalent: 
// const App = () => {
//   return <div>Hello React</div>;
// };

// Equivalent: 
// function App() {
//   return <div>Hello React Quiz</div>
// }