// src/components/PrivateRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ element, isAdmin, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAdmin ? element : <Navigate to="/" />}
    />
  );
}

export default PrivateRoute;
