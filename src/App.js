import React, {Component} from 'react';
import './App.css';
import Book  from './components/book';

class App extends Component {

state = {
  books : [
    { id:1, BookName : "1984", writer : "George Orwell" },
    { id:2, BookName : "The Da Vinci Code", writer : "Dan Brown"},
    { id:3, BookName : "The Alchemist", writer : "Paulo Coelho"}
  ],
}

changeWithInputState = (event, index) =>{
const book = {
  ...this.state.books[index]
}

book.BookName = event.target.value
const books = [...this.state.books];
books[index] = book;

this.setState({
books:books
});
}

deleteBookState = index =>{
  //const books = this.state.books.slice();
  //const books = this.state.books.map(item => item)

  const books = [...this.state.books];
  books.splice(index, 1);
  this.setState({
    books : books
  });

};
  render() {

    //const booksState = this.state.books;

    const books = this.state.books.map((book ,index)=>{
    return(
      <Book 
      bookName = {book.BookName}
      writer = {book.writer}
      delete = {() => this.deleteBookState(index)}
      key={book.id}

      inputName = {(event) =>this.changeWithInputState(event,index)}
      />
    );
    
    });


    return (
          <div className="App">
            <h1>Book List</h1>
            {books}

          </div>
        );
  }
}


export default App;
