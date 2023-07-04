import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cart from './Cast';
import Reviews from './Reviews';
import { Header, Ul, List, StyledLink } from './AppStyled';


const KEY = '29e320b0bf1d174be49080fdcc11784e';


export const App = () => {
  return (
    <div>
      <Header>
        <nav>
          <Ul>
            <List>
              <StyledLink to="/">Home</StyledLink>
            </List>
            <List>
              <StyledLink to="/movies">Movies</StyledLink>
            </List>
          </Ul>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cart />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
