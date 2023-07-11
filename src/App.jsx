import { Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import { useAuth } from './hooks/useAuth';
// import './App.css';
import SharedLayout from './components/sharedLayout/SharedLayout';
// import Home from './pages/home/Home';
// import Contacts from './pages/contacts/Contacts';
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
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
    <Box p={5}>
      <b>Refreshing user...</b>
    </Box>
  ) : (
    <Box p={5}>
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
    </Box>
  );
};

export default App;
