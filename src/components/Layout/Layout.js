import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, StyledLink } from './LayoutStyled';

export const Layout = () => {
  return (
    <>
      <Header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
