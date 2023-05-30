import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from '../pages/Movies';
// import MovieDetails from '../pages/MovieDetails';
import { Layout } from './Layout';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Home = lazy(() => import('../pages/Home'));
const Home = lazy(() => import('../pages/Home'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
