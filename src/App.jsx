import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import ChartPage from './pages/ChartPage';
import './app.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/chart",
    element: <ChartPage />,
  },
]);

const App = () => {
  return (
    <main className='main'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;