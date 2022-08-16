import React from 'react';
import './App.css';


//JSX code
function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      < Person />
    </div>
  );
}


function Person() {
  return (
    <div>
    <h1> I am person component</h1>
  </div>

  );
}


export default App;
