import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const manu = (
    <>
      <li>
        <NavLink
          className={`${({ isActive }) => (isActive ? ".active" : "")}`}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${({ isActive }) => (isActive ? ".active" : "")}`}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${({ isActive }) => (isActive ? ".active" : "")}`}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${({ isActive }) => (isActive ? ".active" : "")}`}
          to="/our-menu"
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          className={`${({ isActive }) => (isActive ? ".active" : "")}`}
          to="/our-shop"
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-to-card"> </NavLink>
      </li>

      <li></li>
      <li></li>
    </>
  );

  return (
    <div className="navbar fixed mx-auto max-w-7xl bg-black bg-opacity-50 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {manu}
          </ul>
        </div>
        <Link to="/" className="text-xl text-white">
          FoodVila
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex flex-grow">
        <ul className="menu navLinks menu-horizontal px-1">{manu}</ul>
      </div>
      <div className="navbar-end gap-4">
        <a
          className={
            "flex justify-center items-center text-xl text-white border border-transparent hover:border-white px-4 py-2 rounded-md"
          }
        >
          <FaCartShopping />
        </a>
        <a className="btn">Log In</a>
        <a className="btn">Sign up</a>
      </div>
    </div>
  );
}

export default Navbar;