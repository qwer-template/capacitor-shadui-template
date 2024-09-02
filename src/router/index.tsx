import Home from "@/pages/index";
import ErrorPage from "@/pages/error-page";
import { createHashRouter, createBrowserRouter } from "react-router-dom";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
export default routes;
