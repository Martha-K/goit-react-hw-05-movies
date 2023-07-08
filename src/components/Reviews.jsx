import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from 'Api/Api';
import { Div, Response, Content } from './ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState('');

  useEffect(() => {
    axios
      .get(`${URL}/movie/${movieId}/reviews`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWUzMjBiMGJmMWQxNzRiZTQ5MDgwZmRjYzExNzg0ZSIsInN1YiI6IjY0OTJmZGI1ZjlhYTQ3MDEyNTI4ZWUzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORt8gsjacWQJrEciUN7bflQ7U3K2KgSN_HxgKWXEhr4`,
        },
      })
      .then(res => {
        setReview(res?.data);
      });
  }, [movieId]);


  return (
    <div>
      {review?.results?.length ? (
        review.results?.map(el => (
          <Div key={el.id}>
            <Response>Author: {el.author}</Response>
            <Content>{el.content}</Content>
          </Div>
        ))
      ) : (
        <Response>Unfortunately, there are no reviews yet :( </Response>
      )}
    </div>
  );
};

export default Reviews;
