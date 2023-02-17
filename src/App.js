import './App.css';

import { 
  createBrowserRouter,
  Outlet,
  RouterProvider
} from 'react-router-dom';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';

import Footer from './components/Footer';
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Demoreel from './pages/Demoreel';
import Job from './pages/Job';

import works from "./data/jobs.json"


const router = createBrowserRouter([
  {
    element: (
      <>
      <Navigation />
      <Outlet />
      <Footer />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/demoreel",
        element: <Demoreel />
      },
      {
        path: "/:jobTitle",
        element: <Job works={works} />,
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
