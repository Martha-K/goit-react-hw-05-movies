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
      .get(
        `${URL}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
      )
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
