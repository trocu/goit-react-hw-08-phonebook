import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Divider } from '@chakra-ui/react';
import AppBar from '../appBar/AppBar';

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Divider />
      <Suspense fallback={<Box p={15}>Loading...</Box>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
