import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { CreateForm } from './components/CreateForm';
import { UserForm } from './components/Forms/UserForm';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Profile } from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    // element: <MainLayout />,
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

