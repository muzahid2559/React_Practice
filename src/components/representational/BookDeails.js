import React from "react";

const BookDetails = props =>{

    if (props.book === null) return <div></div>
    return(
        <div>
            <h1>{props.book.BookName}</h1>
            <h3>{props.book.writer}</h3>
            <p>{props.book.description}</p>

        </div>

    );
}

export default BookDetails;