import { Outlet } from "react-router-dom"
import Navbar from "../Pages/SharedComponents/Navbar/Navbar"
import Footer from "../Pages/SharedComponents/Footer/Footer"

function MainLayout() {
  return (
    <div className="max-w-screen-xl mx-auto .font-1">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout