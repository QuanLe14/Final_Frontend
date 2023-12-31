import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import axios from "axios";
import "../App.css";

function BookList() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
      getBooks();
    }) 
    
    const getBooks = () =>{
      axios
      .get("http://localhost:5000/book")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log('Error from BookList');
      });
    }

    const deleteBook = (id)=> {
      console.log(id)
      axios
      .delete(`http://localhost:5000/book/delete/${id}`)
      .then((res) => {
        getBooks()
        console.log(res.data)
      })
      .catch((err) => {
        console.log('Error from add book');
      });

    }

    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} key={k} 
        deleteBook={() => deleteBook(book._id)}/>);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>:Books List:</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }

  export default BookList;