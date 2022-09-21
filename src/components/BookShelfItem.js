import "../App.css";

const BookShelfItem = ({
  title,
  author,
  bookImg,
  handleChange,
  id,
  bookShelf,
}) => {
  const book = {
    id: id,
  };

  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookImg})`,
            }}></div>
          <div className='book-shelf-changer'>
            <select onChange={(e) => handleChange(e, book)}>
              <option value='none' disabled>
                Move to...
              </option>
              <option
                selected={bookShelf === "currentlyReading" ? true : false}
                value='currentlyReading'>
                Currently Reading
              </option>
              <option
                selected={bookShelf === "wantToRead" ? true : false}
                value='wantToRead'>
                Want to Read
              </option>
              <option
                selected={bookShelf === "read" ? true : false}
                value='read'>
                Read
              </option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{title}</div>
        <div className='book-authors'>{author}</div>
      </div>
    </li>
  );
};

export default BookShelfItem;
