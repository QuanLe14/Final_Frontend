import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookList from './components/FrontPage_BookList';
import CreateBook from './components/CreateBook';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/create-book" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
