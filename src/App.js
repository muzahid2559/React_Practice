import React, {Component} from 'react';
import './App.css';
import Book  from './components/book';

class App extends Component {

state = {
  books : [
    { BookName : "1984", writer : "George Orwell" },
    { BookName : "The Da Vinci Code", writer : "Dan Brown"},
    { BookName : "The Alchemist", writer : "Paulo Coelho"}
  ],
  otherProps : "I am some other prop"
}

changeBookState = () =>{
  this.setState({
    books : [
      { BookName : "Nineteen Eighty-Four", writer : "George Orwell" },
      { BookName : "The Da Vinci Code", writer : "Dan Brown"},
      { BookName : "Metmorphosis", writer : "Franz Kafka"}
    ]
  });

}

  render() {
    return (
          <div className="App">
            <h1>Book List</h1>
            <button onClick={this.changeBookState}>Change State</button>

            <Book BookName = {this.state.books[0].BookName} Writer = {this.state.books[0].writer}/>
            <Book BookName = {this.state.books[1].BookName} Writer = {this.state.books[1].writer}/>
            <Book BookName = {this.state.books[2].BookName} Writer = {this.state.books[2].writer}/>

          </div>
        );
  }
}


export default App;
