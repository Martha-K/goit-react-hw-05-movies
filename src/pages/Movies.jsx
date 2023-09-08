import { useState } from 'react';
import axios from 'axios';
import { URL } from 'Api/Api';
import { Search, Input, Button, List, Ul, StyledLink } from './MoviesStyled';
import { useLocation } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const location = useLocation()


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

  return (
    <>
      <Search>
        <Input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button type="button" onClick={onSearch}>
          Пошук
        </Button>

        <div>
          <Ul>
            {movies.map(el => (
              <List key={el.id}>
                <StyledLink to={`/movies/${el.id}`} state={{from: location}}>
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
