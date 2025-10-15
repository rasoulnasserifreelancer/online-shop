import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
export default function Layout() {
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
