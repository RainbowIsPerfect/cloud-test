import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateForm } from './components/CreateForm';
import { Profile } from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: '/create',
        element: <CreateForm />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

