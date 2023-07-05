import './App.css';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/sharedLayout/SharedLayout';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Contacts from './pages/contacts/Contacts';

const App = () => {
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
            path='login'
            element={<Login />}
          />
          <Route
            path='register'
            element={<Register />}
          />
          <Route
            path='contacts'
            element={<Contacts />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
