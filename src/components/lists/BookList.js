import React from "react";
import Book from "../representational/Book";

const BookList = (props) =>{
return(
    props.books.map((book ,index)=>{
        return(
          <Book 
          bookName = {book.BookName}
          writer = {book.writer}
          delete = {() => this.deleteBookState(index)}
          key={book.id}
    
          inputName = {(event) =>this.changeWithInputState(event,index)}
          />
        );
        })
);
}

export default BookList;