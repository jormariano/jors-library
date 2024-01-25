import NavBar from './components/NavBar';
import Home from './components/Home';
import Authors from './components/Authors';
import Genre from './components/Genre';
import Blog from './components/Blog';
import Search from './components/Search';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
