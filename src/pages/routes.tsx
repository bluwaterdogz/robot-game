import { createBrowserRouter } from 'react-router-dom';
import { Home } from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />,
  },
]);
