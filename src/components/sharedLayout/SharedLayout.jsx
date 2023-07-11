import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
