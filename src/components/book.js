import React from "react";
import '../stylesheets/Book.css';

const Book = props =>{
    return (
        <div className="Book">
            <h3 onClick={props.change}>Book :{props.BookName}</h3>
            <h4>Writer :{props.Writer}</h4>
            <input type="text" onChange ={props.inputName} value={props.BookName}></input>

        </div>

    );
}

export default Book;