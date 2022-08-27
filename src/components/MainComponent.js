import React, { Component } from "react";
import booklist from "../assets/booklist";
import BookList from "./lists/BookList";
import NewBook from "./representational/NewBook";
import { Route , Routes ,NavLink} from 'react-router-dom';



class MainComponent  extends Component{
  constructor(props){
    super(props);

    this.state = {
      books : booklist
    }
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

          const books = <BookList 
            books = {this.state.books} 
            deleteBookState = {this.deleteBookState}
            changeWithInputState = {this.changeWithInputState}
            />
      
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
                  
                  </Routes> 

      
                </div>
              );
        }
}

export default MainComponent;