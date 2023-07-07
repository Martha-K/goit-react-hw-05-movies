import axios from 'axios';
import { Suspense } from 'react';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import {
  Container,
  Ul,
  Li,
  Div,
  Img,
  NameMovie,
  MovieInfo,
  StyledLink,
} from './MovieDetailsStyled';
import { URL } from 'Api/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setMovie(res?.data);
      });
  }, [movieId]);

  return (
    <>
      <Container>
        {movie?.poster_path && (
          <Img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
          />
        )}
        <Div>
          <NameMovie>{movie?.title}</NameMovie>
          <MovieInfo>{Math.floor(movie?.vote_average * 10)} %</MovieInfo>
          <p>{movie?.release_date}</p>
          <MovieInfo>Overview</MovieInfo>
          <p>{movie?.overview}</p>
          <MovieInfo>Genres</MovieInfo>
          <p>
            {movie.genres?.map(el => (
              <li key={el.id}>{el.name}</li>
            ))}
          </p>
        </Div>
      </Container>
      <Ul>
        <Li>
          <StyledLink to="cast">Cast</StyledLink>
        </Li>
        <Li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </Li>
      </Ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
