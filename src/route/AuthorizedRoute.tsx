import React from 'react';
import AuthorizedLayout from '../layout/AuthorizedLayout';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const AuthorizedRoute = (): React.ReactElement => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AuthorizedLayout key='dashboard' body={<Dashboard />} />,
      errorElement: <Error />
    }
  ]); 

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
};

export default AuthorizedRoute;
