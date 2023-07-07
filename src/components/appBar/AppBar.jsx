import { useAuth } from '../../hooks/useAuth';
import AuthNav from '../authNav/AuthNav';
import Navigation from '../navigation/Navigation';
import UserMenu from '../userMenu/UserMenu';
import css from './AppBar.module.css';

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
