import React, { Component } from "react";
import booklist from "../assets/booklist";
import BookList from "./lists/BookList";



class MainComponent  extends Component{
    state = {
        books : booklist,
        showBooks: true
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
      
      toggleBooks =() =>{
        this.setState({
          showBooks:!this.state.showBooks
        });
      
      }
      
      
        render() {
      
          //const booksState = this.state.books;
          let books = null;
          if(this.state.showBooks){
      
            books = <BookList books = {this.state.books}/>
      
          }
      
      
      
      
      
          return (
                <div className="App">
                  <h1>Book List</h1>
                  <button onClick={this.toggleBooks}>Toggle Books</button>
                  {books}
      
                </div>
              );
        }
}

export default MainComponent;