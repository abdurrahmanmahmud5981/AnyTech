
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>
    },
  ]);

  export default routes;