import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Ul, List, StyledLink } from './AppStyled';

 
export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <Ul>
            <List>
              <StyledLink to="/">Home</StyledLink>
            </List>
            <List>
              <StyledLink to="/movies">Movies</StyledLink>
            </List>
          </Ul>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );}