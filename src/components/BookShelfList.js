import BookShelfItem from "./BookShelfItem";
import "../App.css";

const BookShelf = ({ title, books, handleChange }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.map((book) => (
            <BookShelfItem
              title={book.title}
              author={book.authors[0]}
              bookImg={book.imageLinks.thumbnail}
              id={book.id}
              key={book.id}
              handleChange={handleChange}
              bookShelf={book.shelf}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
