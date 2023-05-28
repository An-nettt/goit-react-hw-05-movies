import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
// import Movies from '../pages/Movies';
// import Films from '../pages/Films';

export default function App() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="/movies">Movies</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<Films />} /> */}
      </Routes>
    </div>
  );
}
