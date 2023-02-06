import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/index';

const AuthProtection = props => {
  const authCheck = useSelector(state => state.auth.isAuthenticated);
  const dispatchToken = useDispatch();
  const token = window.localStorage.getItem('token');

  if (token) {
    dispatchToken(authActions.logIn());
    return props.children;
  }

  if (!authCheck) {
    return <Navigate to="/signin" replace />;
  }
};

export default AuthProtection;
