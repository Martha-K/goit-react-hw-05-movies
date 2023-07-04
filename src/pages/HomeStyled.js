import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const List = styled.li`
  padding: 3px;
  text-decoration: none;
`;

export const Ul = styled.ul`
margin-left:15px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: blue;
  }
`;

export const Title = styled.h1`
margin-left: 35px;
`;