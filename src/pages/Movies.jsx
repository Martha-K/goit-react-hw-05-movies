import { useState } from 'react';
import axios from 'axios';
import { URL } from 'Api/Api';
import { Search, Input, Button, List, Ul, StyledLink } from './MoviesStyled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const onSearch = search => {
    axios
      .get(
        `${URL}/search/movie?query=${search}&api_key=${process.env.REACT_APP_API_KEY}`
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
