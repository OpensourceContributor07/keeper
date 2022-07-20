import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Create React app from Scratch
//Create app.jsx compnent
//Create Header.jsx compnent that renders a <header> element to show the keeper app name in h1
//to show copyright message in a <p> with dynamicay updated year
//Create a note.jsx component to show a <div> element with a <h1> for a tittle and a <p> for the content
//make sure that your final website looks like as : https://w00gz.csb.app/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
