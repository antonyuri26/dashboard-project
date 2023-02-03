import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

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
import { json } from 'react-router-dom';

const imageLoader = async () => {
  const response = await fetch('https://picsum.photos/v2/list');
  const data = await response.json();
  // console.log(data);

  if (!response.ok) {
    throw json({ message: 'Could not Fetch Images' }, { status: 500 });
  } else {
    return data;
  }
};

//creating routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: '/signin', element: <SignIn /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/application', element: <Application /> },
      { path: '/ecommerce', element: <Ecommerce /> },
      { path: '/marketing', element: <Marketing /> },
      { path: '/community', element: <Community /> },
      { path: '/themes', element: <Themes />, loader: imageLoader },
      { path: '/pricing', element: <Pricing /> },
      { path: '/documentation', element: <Documentation /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
