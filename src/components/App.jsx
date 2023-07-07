import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Home from '../pages/Home';
// import Movies from 'pages/Movies';
// // import MovieDetails from 'pages/MovieDetails';
// import Cart from './Cast';
// import Reviews from './Reviews';
import {SharedLayout} from '../components/SharedLayout'

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cart = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cart />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
