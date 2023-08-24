import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/Appbar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
