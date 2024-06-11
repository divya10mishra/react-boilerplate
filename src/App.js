import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Pagination from "./features/Pagination/pagination";
import Counter from "./features/Counter/Counter";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/counter",
        element: <Counter />,
      },
      {
        path: "/pagination",
        element: <Pagination />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<RouterProvider router={appRouter} />);
