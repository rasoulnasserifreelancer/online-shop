import { Suspense } from "react";
import Navbar from "../components/navbar";
import { useAppSelector } from "../hooks/hooks";
import { Outlet, Navigate } from "react-router";
import Footer from "../components/footer";

export default function PrivateLayout() {
  const loginState = useAppSelector((state) => state.loginReducer);
  console.log(loginState)
  if (!loginState.access_token) {
    return <Navigate to="/login"></Navigate>;
  } else {
    return (
      <>
        <Navbar />
        <Suspense>
          <Outlet />
        </Suspense>
        <Footer />
      </>
    );
  }
}
