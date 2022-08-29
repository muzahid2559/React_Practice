import React, { Component } from "react";
import booklist from "../assets/booklist";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import BookDetails from "./representational/BookDeails";
import { Route , Routes ,NavLink} from 'react-router-dom';



class MainComponent  extends Component{
  constructor(props){
    super(props);
    this.state = {
      books : booklist,
      selectedBook:null
    }
  }

  selectedBookHandler = bookId =>{
    const book = this.state.books.filter(book =>
      book.id === bookId)[0];
    this.setState({
      selectedBook : book
    })
  }
  
       render() {

          const books = <BookList books = {this.state.books}  selectedBookHandler = {this.selectedBookHandler}/>
      
          return (
                <div className="App">
                  <nav className="nav-bar">

                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>

                  </nav>
   

                  <Routes>
                        <Route path="/" exact element={books} />
                        <Route path="/new-book" exact element={<NewBook/>} />
                        <Route path="/:id" exact element={<BookDetails book={this.state.selectedBook}/>} />
                  </Routes> 
                </div>
              );
        }
}

export default MainComponent;