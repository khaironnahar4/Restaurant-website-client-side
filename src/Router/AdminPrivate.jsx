import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Auth/UseAuth/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminPrivate = ({ children }) => {
  const { user, loader } = useAuth();
  const location = useLocation();
  const [isAdmin, isAdminLoading] = useAdmin()

  if (loader || isAdminLoading)
    return (
      <p className="flex justify-center items-center text-2xl font-bold">
        Loading...
      </p>
    );

  if (user && user?.email && isAdmin) return children;

  return <Navigate to={"/"} state={location?.pathname}></Navigate>;
};

export default AdminPrivate;
