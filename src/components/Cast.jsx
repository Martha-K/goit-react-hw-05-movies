import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from 'Api/Api';
import { Img, Cart, Div, ActorName } from './CastStyled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState('');

  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}/credits`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWUzMjBiMGJmMWQxNzRiZTQ5MDgwZmRjYzExNzg0ZSIsInN1YiI6IjY0OTJmZGI1ZjlhYTQ3MDEyNTI4ZWUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORt8gsjacWQJrEciUN7bflQ7U3K2KgSN_HxgKWXEhr4`,
        },
      })
      .then(res => {
        setCast(res?.data);
      });
  }, [movieId]);

  return (
    <Cart>
      {cast.cast?.map(el => (
        <Div key={el.id}>
          {el.profile_path && (
            <Img
              src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
              alt=""
            />
          )}
          <ActorName>{el.name}</ActorName>
          <p>Character: {el.character}</p>
        </Div>
      ))}
    </Cart>
  );
};

export default Cast;
