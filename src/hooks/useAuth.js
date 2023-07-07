import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggegIn,
  selectIsRefreshing,
  selectError,
} from '../redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggegIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);

  return { user, isLoggedIn, isRefreshing, error };
};
