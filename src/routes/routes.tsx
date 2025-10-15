import { lazy } from "react";
const Home = lazy(() => import("../pages/home"));
const Products = lazy(() => import("../pages/products"));
const Layout = lazy(() => import("../layout/Layout"));
const Error = lazy(() => import("../pages/Error"));
const Cart = lazy(() => import("../pages/Cart"));
const SingUp = lazy(() => import("../pages/signup"));
const Login = lazy(() => import("../pages/login"));
const PrivateLayout = lazy(() => import("../layout/PrivateLayout"));
const Product = lazy(() => import("../pages/product"))
import { createBrowserRouter } from "react-router";
import About from "../pages/about";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
          {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
