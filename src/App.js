import React, {Component} from 'react';
import './App.css';
import Book  from './components/book';

class App extends Component {

  render() {
    return (
          <div className="App">
            <h1>Book List</h1>
            <Book BookName = "1984" Writer = "George Orwell"/>
            <Book BookName = "The Da Vinci Code" Writer = "Dan Brown"/>
            <Book BookName = "The Alchemist" Writer = "Paulo Coelho"/>

          </div>
        );
  }
}


export default App;
