import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Events from './pages/Events';
import Sermons from './pages/Sermons';
import Contact from './pages/Contact';
import Giving from './pages/Giving';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'sermons',
        element: <Sermons />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'giving',
        element: <Giving />,
      },
    ],
  },
]);
