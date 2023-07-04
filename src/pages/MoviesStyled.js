import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const Search = styled.div`
padding: 20px;
margin-left: 20px;
`

export const Input = styled.input`
width: 200px;
height: 30px;
border-color: black;
border-radius: 8px;
margin-right: 5px;
font-size: large;
padding-left: 10px;
`

export const Button = styled.button`
  width: 90px;
  height: 30px;
  border-color: black;
  border-radius: 5px;
`;

export const List = styled.li`
  padding: 2px;
  text-decoration: none;
`;

export const Ul = styled.ul`
  /* list-style: none; */
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 20px;

  &.active {
    color: blue;
  }
`;