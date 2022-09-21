import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import MyReadPage from "./components/MyReadPage";
import { getAll } from "./BooksAPI";

function App() {
  const [booksState, setBooksState] = useState([]);
  const [isChange, setIsChange] = useState(false);
  const handleChange = () => {
    setIsChange(true);
  };
  useEffect(() => {
    if (booksState.length === 0 || isChange) {
      const getBooks = async () => {
        const books = await getAll();
        setBooksState(books);
      };
      getBooks();
      setIsChange(false);
    }
    if (booksState.length > 0) {
      console.log(booksState);
    }
  }, [booksState, isChange]);
  return (
    <div className='app'>
      <Routes>
        <Route
          path='/'
          element={
            <MyReadPage books={booksState} handleChangeRender={handleChange} />
          }
        />
        <Route
          path='/search'
          element={
            <SearchPage books={booksState} handleChange={handleChange} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
