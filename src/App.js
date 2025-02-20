import react from 'react';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Home from './components/Home.js';
import Education from './components/Education.js';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import Project from './components/Project.js';
import Skills from './components/Skills.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/applayout/Layout.js';

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/Home",
        element: <Layout />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Education",
        element: <Education />, 
      },
      {
        path: "/Experience",
        element: <Experience/>,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },

    ]

  }])
  return <RouterProvider router={router}/>
    
  
}


export default App;
