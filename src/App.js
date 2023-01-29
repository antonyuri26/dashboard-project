import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Link } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ErrorPage from './pages/ErrorPage';
import Application from './pages/Application';
import Ecommerce from './pages/Ecommerce';
import Marketing from './pages/Marketing';
import Community from './pages/Community';
import Themes from './pages/Themes';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';

//creating routes

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/about', element: <h1>ABOUT</h1> },
      { path: '/application', element: <Application /> },
      { path: '/ecommerce', element: <Ecommerce /> },
      { path: '/marketing', element: <Marketing /> },
      { path: '/community', element: <Community /> },
      { path: '/themes', element: <Themes /> },
      { path: '/pricing', element: <Pricing /> },
      { path: '/documentation', element: <Documentation /> },
    ],
  },
  // {
  //   path: '/singin',
  //   element: <SignIn />,
  // },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
