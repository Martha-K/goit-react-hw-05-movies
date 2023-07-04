import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { URL } from 'Api/Api';
import { Search, Input, Button, List, Ul, StyledLink } from './MoviesStyled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onSearch = search => {
    axios
      .get(
        `${URL}/search/movie?query=${search}&api_key=29e320b0bf1d174be49080fdcc11784e`
      )
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
                <StyledLink to={`/movies/${el.id}`}>
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
