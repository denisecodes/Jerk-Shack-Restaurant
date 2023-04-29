import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Contact from './pages/Contact/Contact';
import Queuing from './pages/Queuing/Queuing';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


// Clear currentTicket number every time the web app compiles again
localStorage.removeItem('currentTicket');


const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
},
{
    path: "contact",
    element: <Contact />,
},
{
    path: "queuing",
    element: <Queuing />,
},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <RouterProvider router={router} />
</React.StrictMode>
);

