import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL } from 'Api/Api';
import { List, Ul, StyledLink, Title } from './HomeStyled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/trending/movie/day`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWUzMjBiMGJmMWQxNzRiZTQ5MDgwZmRjYzExNzg0ZSIsInN1YiI6IjY0OTJmZGI1ZjlhYTQ3MDEyNTI4ZWUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORt8gsjacWQJrEciUN7bflQ7U3K2KgSN_HxgKWXEhr4`,
        },
      })
      .then(res => {
        setMovies(res.data.results);
      });
  }, []);

  return (
    <>
      <Title>Trends today:</Title>
      <Ul>
        {movies.map(el => (
          <List key={el.id}>
            <StyledLink to={`movies/${el.id}`}>
              {el.title || el.name}
            </StyledLink>
          </List>
        ))}
      </Ul>
    </>
  );
};

export default Home;
