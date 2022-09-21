import { Link } from "react-router-dom";
import BookShelf from "./BookShelfList";
import { useState, useEffect } from "react";
import { update } from "../BooksAPI";

const MyReadPage = ({ books, handleChangeRender }) => {
  const [currentReadBooks, setCurrentReadBooks] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);
  useEffect(() => {
    const currentRbooks = books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    setCurrentReadBooks(currentRbooks);
    const wantRead = books.filter((book) => book.shelf === "wantToRead");
    setWantToRead(wantRead);
    const reads = books.filter((book) => book.shelf === "read");
    setRead(reads);
  }, [books]);

  const handleBookShelfChange = (event, bookTitle) => {
    console.log(event.target.value);
    update(bookTitle, event.target.value);
    const timeOfChange = () => setTimeout(handleChangeRender, 500);
    timeOfChange();
    clearTimeout(timeOfChange);
  };

  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      {books.length > 0 ? (
        <div className='list-books-content'>
          <div>
            <BookShelf
              title='Currently Read Books'
              books={currentReadBooks}
              handleChange={handleBookShelfChange}
            />
            <BookShelf
              title='Want To Read'
              books={wantToRead}
              handleChange={handleBookShelfChange}
            />
            <BookShelf
              title='Read'
              books={read}
              handleChange={handleBookShelfChange}
            />
          </div>
        </div>
      ) : (
        <h3 className='list-books-content'>Loading Data ....</h3>
      )}

      <div className='open-search'>
        <Link to='/search'>Add Book</Link>
      </div>
    </div>
  );
};

export default MyReadPage;
