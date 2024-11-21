
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './pages/routes.tsx';
import "./styles.scss"

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);