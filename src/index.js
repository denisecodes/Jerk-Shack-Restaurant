import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Contact from './pages/Contact/Contact';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path: "contact",
    element: <Contact />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);

