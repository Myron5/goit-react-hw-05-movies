import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    pointer-events: none;
    color: orange;
  }
`;

const SharedLayout = () => {
  return (
    <div>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Suspense fallback={<div>Завантажуєм сторінку...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
