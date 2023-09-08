import axios from 'axios';
import { Suspense } from 'react';
import { useEffect, useState, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  Container,
  Ul,
  Li,
  Div,
  Img,
  NameMovie,
  MovieInfo,
  StyledLink,
  LinkToBack,
} from './MovieDetailsStyled';
import { URL } from 'Api/Api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLocationRef = useRef(location.state?.from ?? '/movies');
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWUzMjBiMGJmMWQxNzRiZTQ5MDgwZmRjYzExNzg0ZSIsInN1YiI6IjY0OTJmZGI1ZjlhYTQ3MDEyNTI4ZWUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORt8gsjacWQJrEciUN7bflQ7U3K2KgSN_HxgKWXEhr4`,
        },
      })
      .then(res => {
        setMovie(res?.data);
      });
  }, [movieId]);

  console.log('location', location)
  console.log('backLocationRef', backLocationRef)

  return (
    <>
      <LinkToBack to={backLocationRef.current}> ←Turn back</LinkToBack>
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
