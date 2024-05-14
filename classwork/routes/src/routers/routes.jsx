import React from "react";
import UserRoot from "../layout/UserRoot";
import Home from "../compnents/Home";
import About from "../compnents/About";
import Blog from "../compnents/Blog";
import Login from "../compnents/Login";

const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
