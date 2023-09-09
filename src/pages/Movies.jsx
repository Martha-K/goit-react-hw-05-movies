import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL } from 'Api/Api';
import { Search, Input, Button, List, Ul, StyledLink } from './MoviesStyled';
import { useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [search, setSearch] = useSearchParams();
  const movieId = search.get('movieId') ?? '';

  useEffect(() => {
    movieId && onSearch(movieId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSearch = search => {
    axios
      .get(`${URL}/search/movie?query=${search}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWUzMjBiMGJmMWQxNzRiZTQ5MDgwZmRjYzExNzg0ZSIsInN1YiI6IjY0OTJmZGI1ZjlhYTQ3MDEyNTI4ZWUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORt8gsjacWQJrEciUN7bflQ7U3K2KgSN_HxgKWXEhr4`,
        },
      })
      .then(res => {
        setMovies(res.data.results);
      });
  };
  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearch({});
    }
    setSearch({ movieId: movieIdValue });
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSearch(movieId); 
  };
  return (
    <>
      <Search>
        <form onSubmit={handleSubmit}>
          <Input type="text" value={movieId} onChange={updateQueryString} />
          <Button type="submit">Пошук</Button>
        </form>

        <div>
          <Ul>
            {movies.map(el => (
              <List key={el.id}>
                <StyledLink to={`/movies/${el.id}`} state={{ from: location }}>
                  {el.title ? el.title : el.name}
                </StyledLink>
              </List>
            ))}
          </Ul>
        </div>
      </Search>
    </>
  );
};

export default Movies;
