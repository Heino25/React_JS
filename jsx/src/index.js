// Import the React and ReactDOM libraries
import React from  'react';
import ReactDOM from 'react-dom';

// Creat a react cmponent
const App = () => {
    return <div>Hi there!</div>;
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
        document.querySelector('#root')
);
