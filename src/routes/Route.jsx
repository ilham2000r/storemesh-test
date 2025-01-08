import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '../pages/Index'

const router = createBrowserRouter([
  {
    path: '/', //element of path is A
    children: [
      { index: true, element: <Index /> }, //path of element is /
    ],
  },
]);

const AppRoute = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoute;