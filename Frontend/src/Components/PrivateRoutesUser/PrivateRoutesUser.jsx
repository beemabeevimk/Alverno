import { Route, Navigate } from 'react-router-dom';

const PrivateRoutesUser = ({ element, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      element={authenticated ? element : <Navigate to="/login" />}
    />
  );
};