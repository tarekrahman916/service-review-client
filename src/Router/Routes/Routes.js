import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Register from "../../Pages/Register/Register";
import ReviewUpdate from "../../Pages/ReviewUpdate/ReviewUpdate";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://service-review-server-gold.vercel.app/services"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () =>
          fetch("https://service-review-server-gold.vercel.app/all-services"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/reviews",
        element: (
          <PrivateRoutes>
            <MyReviews />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-gold.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/review/update/:id",
        element: <ReviewUpdate></ReviewUpdate>,
        loader: ({ params }) =>
          fetch(
            `https://service-review-server-gold.vercel.app/review/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
