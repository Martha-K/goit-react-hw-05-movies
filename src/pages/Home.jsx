import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { URL } from 'Api/Api';
import { List, Ul, StyledLink, Title } from './HomeStyled';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/trending/all/day?api_key=29e320b0bf1d174be49080fdcc11784e`).then(res => {
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
              {el.title ? el.title : el.name}
            </StyledLink>
          </List>
        ))}
      </Ul>
    </>
  );
};

export default Home;
