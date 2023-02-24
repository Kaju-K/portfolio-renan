import './App.css';

import { 
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
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

const regexSpecialCharacters = /["?]|\| /g

const router = createBrowserRouter([
  {
    element: (
      <>
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          const path=["/"]
          return path.includes(location.pathname)
            ?
            location.pathname 
            :
            location.key
        }}
      />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root
          regexSpecialCharacters={regexSpecialCharacters}
        />
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
        element: <Job
          works={works}
          regexSpecialCharacters={regexSpecialCharacters}
        />,
      }
    ],
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
