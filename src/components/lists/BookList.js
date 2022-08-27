import React, { Component } from "react";
import Book from "../representational/Book";

class BookList extends Component{
  constructor(props){
    super(props);
    console.log("BookList constructor");
  }

  componentDidMount(){
    console.log("BookList  componentDidMount!")
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("Update BookList shouldComponentUpdate", nextProps,nextState);
    return true;
  }

  componentDidUpdate(){
    console.log("Update BookList componentDidUpdate");
  }

  static getDrivedStateFromProps(nextProps,prevState){
    console.log("BookList getDrivedStateFromProps",nextProps,prevState);
    return prevState;
  }

  getSnapshotBeforeUpdate(){
    console.log("Update BookList getSnapshotBeforeUpdate");
  }


  render(){
    console.log("BookList render");
    

    return(
      this.props.books.map((book ,index)=>{
          return(
            <Book 
            bookName = {book.BookName}
            writer = {book.writer}
            delete = {() => this.props.deleteBookState(index)}
            key={book.id}
      
            inputName = {(event) =>this.props.changeWithInputState(event,index)}
            />
          );
        })
    );

  }

}

export default BookList;