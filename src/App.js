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
// import works from "./data/jobs.json"


const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
