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

changeBookState = newBookName =>{
  this.setState({
    books : [
      { BookName : newBookName, writer : "George Orwell" },
      { BookName : "The Vinci Code", writer : "Dan Brown"},
      { BookName : "Metmorphosis", writer : "Franz Kafka"}
    ]
  });

}

changeWithInputState = e =>{
  this.setState({
    books : [
      { BookName : e.target.value, writer : "George Orwell" },
      { BookName : "The Da Vinci Code", writer : "Dan Brown"},
      { BookName : "Metmorphosis", writer : "Franz Kafka"}
    ]
  });
}

  render() {

    //const booksState = this.state.books;

    const books = this.state.books.map(book =>{
    return(
      <Book 
      bookName = {book.BookName}
      writer = {book.writer}
      />
    );
    
    });


    return (
          <div className="App">
            <h1>Book List</h1>
            <button onClick={() => this.changeBookState("Nineteen Eighty-Four")}>Change State</button>
            <input type="text" onChange={this.changeWithInputState}></input> 
            {books}

          </div>
        );
  }
}


export default App;
