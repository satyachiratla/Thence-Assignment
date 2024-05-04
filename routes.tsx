import { createBrowserRouter } from "react-router-dom";

import Home from "./src/pages/Home";
import Registration from "./src/pages/Registration";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/registration", element: <Registration /> },
]);
