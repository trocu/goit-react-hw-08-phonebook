import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import AppBar from '../appBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Divider />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
