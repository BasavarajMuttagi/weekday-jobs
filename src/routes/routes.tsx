import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
  },
]);

export default routes;
