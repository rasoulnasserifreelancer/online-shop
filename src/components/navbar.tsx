import { FiLogIn } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { NavLink, Link } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { useAppSelector } from "../hooks/hooks";

export default function Navbar(): React.JSX.Element {
  const loginState = useAppSelector((state) => state.loginReducer);
  const cartItems = useAppSelector((state) => state.cartReducer);

  return (
    <>
      <div className="flex justify-between bg-gray-200 items-center sticky top-0 left-0 p-4.5 shadow-lg/10 z-10">
        <h1>My Shop</h1>

        <div className="flex gap-1.5">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-l text-amber-600" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-l  text-amber-600" : ""
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-l text-amber-600" : ""
            }
          >
            About
          </NavLink>
        </div>

        {loginState.access_token ? (
          <Link to="/cart">
            <div className="relative">
              <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </div>
              <FiShoppingCart size={24} />
            </div>
          </Link>
        ) : (
          <div className="flex gap-2.5">
            <div className="flex items-center">
              <Link to="login">
                <FiLogIn />
              </Link>
            </div>
            <div className="flex items-center">
              <Link to="/signup">
                <FiUser />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
