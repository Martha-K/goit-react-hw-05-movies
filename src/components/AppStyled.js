import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const Header = styled.header`
background-color: gray;
text-align: center;
justify-content: center;
height: 40px;
`

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

export const List = styled.li`
  height: 30px;
  width: 80px;
  padding-left: 10px;
  margin-left: 20px;
`;

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 25px;
 

  &.active {
    color: black;
  }
`;
