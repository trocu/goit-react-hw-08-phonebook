import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../appBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
