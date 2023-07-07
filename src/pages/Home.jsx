import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL } from 'Api/Api';
import { List, Ul, StyledLink, Title } from './HomeStyled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        setMovies(res.data.results);
      });
    console.log('process.env', process.env);
  }, []);

  return (
    <>
      <Title>Trends today:</Title>
      <Ul>
        {movies.map(el => (
          <List key={el.id}>
            <StyledLink to={`movies/${el.id}`}>
              {el.title ? el.title : el.name}
            </StyledLink>
          </List>
        ))}
      </Ul>
    </>
  );
};

export default Home;
