import React from 'react';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, authenticated, ...rest }) => {
  const navigate = useNavigate();

  if (!authenticated) {
    // If the user is not authenticated, navigate to the signup page
    navigate('/signup');
    // You can return null or an empty component here if you want nothing to be rendered
    return null;
  }

  // If the user is authenticated, render the specified component
  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
