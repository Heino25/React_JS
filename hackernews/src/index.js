import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myClass from './myClass';
import reportWebVitals from './reportWebVitals';
import Developer from './Developer';
import Employees from './Employees';
import Toggle from './Toggle';
import Composing from './Composing';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// if (module.hot) {
//   module.hot.accept();
// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
