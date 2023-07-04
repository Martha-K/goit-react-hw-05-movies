import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
display: flex;
padding: 10px;
`;

export const Div = styled.div`
margin-left: 10px;
`

export const Ul = styled.ul`
  display: flex;

`;
export const Li = styled.li`
  list-style: none;
  margin-left: 40px;
`;

export const Img = styled.img`
  width: 300px;
  border: 2px solid black;
`;

export const NameMovie = styled.p`
font-size: 30px;
font-weight: 700;
`
export const MovieInfo = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
export const StyledLink = styled(Link)`
  color: #000000;
  text-decoration: none;
  font-size: 25px;

  &.active {
    color: blue;
  }
`;
