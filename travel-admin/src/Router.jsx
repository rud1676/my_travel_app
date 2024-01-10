import React from 'react';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Root from './components/frame/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import useUser from './hooks/useUser';
import Loading from './components/common/Loading';
import User from './pages/User';
import './assets/scss/styles.scss';
import TravelPackage from './pages/TravelPackage';
import Reserve from './pages/Reserve';

// VITE_API_URL=https://recqpvkn6b.ap-northeast-1.awsapprunner.com

const LoggedInRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'travelPackage',
        element: <TravelPackage />,
      },
      {
        path: 'reserve',
        element: <Reserve />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const LogoutRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
]);

export default function Router() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <RouterProvider router={LogoutRouter} />;
  }

  return <RouterProvider router={LoggedInRouter} />;
}
