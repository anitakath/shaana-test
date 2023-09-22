import { Fragment } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//STYLES
import "./App.css";

//PAGES
import Root from "./PAGES/Root";
import Start from "./PAGES/Start";
/*
import AboutMe from "./PAGES/AboutMe";
import MyWork from "./PAGES/MyWork";
import Contact from "./PAGES/Contact";

import DataPrivacy from "./PAGES/DataPrivacy";
import Impressum from "./PAGES/Impressum";*/

//SEO
import { Helmet } from "react-helmet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Start />,
      }
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Helmet>
        <title> Hebamme in Hamburg: Shaana Brown Näckler </title>
      </Helmet>
      <h1> HI</h1>
    </RouterProvider>
  );
}

export default App;
