import { createBrowserRouter } from "react-router-dom";
import HomePageLayout from "../Layouts/HomePageLayout";
import PageNotFound from "../components/PageNotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default routes;
