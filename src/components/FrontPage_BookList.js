import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import axios from "axios";

function BookList() {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
      getBooks();
    }) 
    
    const getBooks = () =>{
      axios
      .get('https://backend-300365849.onrender.com/')
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
      .delete('https://backend-300365849.onrender.com/'+id)
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