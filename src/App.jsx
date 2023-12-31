import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
import SharedLayout from './components/sharedLayout/SharedLayout';
import RestrictedRoute from './components/restrictedRoute/RestrictedRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';

const Home = lazy(() => import('./pages/home/Home'));
const Contacts = lazy(() => import('./pages/contacts/Contacts'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box p={15}>Refreshing user...</Box>
  ) : (
    <Routes>
      <Route
        path='/'
        element={<SharedLayout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path='register'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<Register />}
            />
          }
        />
        <Route
          path='login'
          element={
            <RestrictedRoute
              redirectTo='/contacts'
              component={<Login />}
            />
          }
        />
        <Route
          path='contacts'
          element={
            <PrivateRoute
              redirectTo='/login'
              component={<Contacts />}
            />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
