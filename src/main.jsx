import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
}
  from "react-router-dom";
import "./index.css";
import Root,
{ loader as rootLoader, action as rootAction, }
  from "./routes/root";
import ErrorPage from "./error-page";
import Contact,
{ loader as contactLoader,
  action as contactAction, }
  from "./routes/contact";
import EditContact,
{ action as editAction, }
  from "./routes/edit";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";
import Login from "./pages/login";
import { ProtectedRoute } from "./protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        // element:<ProtectedRoute />,
        errorElement: <ErrorPage />,
        children: [
          { 
            index: true, 
            element: <Index />,
          // errorElement: <ErrorPage />, 
          },
          {
            path: "contacts/:contactId",
            element:<Contact />,
            loader: contactLoader,
            action: contactAction,
            // errorElement: <ErrorPage />,
          },
          {
            path: "contacts/:contactId/edit",
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
            // errorElement: <ErrorPage />,
          },
          {
            path: "contacts/:contactId/destroy",
            action: destroyAction,
            // errorElement:<div>Oops! There was an error.</div>,
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element:<ProtectedRoute > <Login /></ProtectedRoute >,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);