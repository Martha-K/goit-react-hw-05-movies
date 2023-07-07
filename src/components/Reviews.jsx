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
      .get(
        `${URL}/movie/${movieId}/reviews?api_key=${process.env.REACT_APP_API_KEY}`
      )
      .then(res => {
        setReview(res?.data);
      });
  }, []);

  console.log('review', review);

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
