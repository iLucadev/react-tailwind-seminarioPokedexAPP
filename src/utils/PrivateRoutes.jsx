import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const PrivateRoutes = () => {
  const isAuth = useSelector((state) => state.authData.isAuth);

  if (!isAuth) {
    return <Loading />;
  }

  return isAuth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
