import { Link } from "react-router-dom";
import { update } from "../BooksAPI";
import BookShelfItem from "./BookShelfItem";
import { useState } from "react";

const SearchPage = ({ books, handleChange }) => {
  const [input, setInput] = useState("");
  const [bookSearch, setBookSearch] = useState([]);

  const handleBookShelfChange = (event, bookTitle) => {
    console.log(event.target.value);
    update(bookTitle, event.target.value);
    const timeOfChange = () => setTimeout(handleChange, 500);
    timeOfChange();
    clearTimeout(timeOfChange);
  };
  const handleSearch = (event) => {
    setInput(event.target.value);
    setBookSearch(
      books.filter((book) => book.title.toLowerCase().includes(input))
    );
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input type='text' value={input} onChange={handleSearch} />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {bookSearch.map((book) => (
            <BookShelfItem
              title={book.title}
              author={book.authors[0]}
              bookImg={book.imageLinks.thumbnail}
              id={book.id}
              key={book.id}
              handleChange={handleBookShelfChange}
              bookShelf={book.shelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
