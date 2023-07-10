import { Route, Routes } from 'react-router-dom';
import './App.css';
import SharedLayout from './components/sharedLayout/SharedLayout';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Contacts from './pages/contacts/Contacts';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from './redux/auth/operations';
import RestrictedRoute from './components/restrictedRoute/RestrictedRoute';
import PrivateRoute from './components/privateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
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
    </>
  );
};

export default App;
