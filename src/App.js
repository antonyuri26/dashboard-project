import React, { lazy, Suspense } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import RootLayout from './components/layout/RootLayout';
import HomePage from './components/pages/HomePage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ErrorPage from './components/pages/ErrorPage';
import Application from './components/pages/Application';
import Ecommerce from './components/pages/Ecommerce';
import Marketing from './components/pages/Marketing';
import Community from './components/pages/Community';
import Pricing from './components/pages/Pricing';
import Documentation from './components/pages/Documentation';
import AuthProtection from './components/auth/AuthProtection';
import { json } from 'react-router-dom';

const Themes = lazy(() => import('./components/pages/Themes'));
const Dashboard = lazy(() => import('./components/pages/Dashboard'));

const imageLoader = async () => {
  const response = await fetch(`https://picsum.photos/v2/list?limit=6`);
  const data = await response.json();

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
      {
        path: '/themes',
        element: (
          <Suspense>
            <Themes />
          </Suspense>
        ),
        loader: () => imageLoader(),
      },
      { path: '/pricing', element: <Pricing /> },
      { path: '/documentation', element: <Documentation /> },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AuthProtection>
        <Suspense fallback={<p>Loading...</p>}>
          <Dashboard />
        </Suspense>
      </AuthProtection>
    ),
    errorElement: <ErrorPage />,
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
