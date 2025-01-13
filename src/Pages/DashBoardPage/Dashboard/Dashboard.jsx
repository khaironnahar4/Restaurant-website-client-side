import {
  FaCalendarAlt,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaStarHalfAlt,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import { FaCalendarCheck, FaList, FaWallet } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

function Dashboard() {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="max-w-7xl mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-start">
          <label
            htmlFor="my-drawer-2"
            className=" p-2 rounded-md mt-6 ms-4 self-start bg-transparent border border-black drawer-button lg:hidden"
          >
            <IoMdMenu />
          </label>
          {/* Page content here */}
          <div className="lg:ms-12 mt-12 w-full">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#D1A054] text-black font-2 uppercase font-semibold min-h-full w-[280px] p-4">
            {/* Sidebar content here */}

            <div className="mt-12 mb-10 text-center">
              <h1 className="font-2 text-[24px] font-bold text-black ">
                Food Vila
              </h1>
              <p className="font-2 text-xl font-semibold uppercase">
                restaurant
              </p>
            </div>

            {isAdmin ? (
              // for admin
              <>
                <li className="my-3">
                  <NavLink
                    to={"/dashboard/admin-home"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaHome /> Admin Home
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/add-items"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaCalendarAlt /> Add Items
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/manage-items"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaList /> Manage Items
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/manage-booking"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaShoppingCart /> Manage Bookings
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/all-users"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaStarHalfAlt /> All Users
                  </NavLink>
                </li>
              </>
            ) : 
            // for logged in users
            (
              <>
                <li className="my-3">
                  <NavLink
                    to={"/dashboard/home"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaHome /> User Home
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/reservation"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaCalendarAlt /> Reservation
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/payment-history"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaWallet /> Payment history
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/cart"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaShoppingCart /> My cart ({cart.length})
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/add-review"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaStarHalfAlt /> Add review
                  </NavLink>
                </li>

                <li className="my-3">
                  <NavLink
                    to={"/dashboard/booking"}
                    className={`${({ isActive }) =>
                      isActive ? "active" : ""}`}
                  >
                    <FaCalendarCheck /> My booking
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li className="my-2">
              <NavLink to={"/"}>
                <FaHome /> Home
              </NavLink>
            </li>

            <li className="my-2">
              <NavLink to={"/our-shop"}>
                <FaShoppingBag /> Shop
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
