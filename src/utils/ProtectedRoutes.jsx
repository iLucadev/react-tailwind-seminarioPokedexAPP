import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoutes = ({ children }) => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    return <Navigate to="/signin" replace={true} />;
  }
  return children;
};

ProtectedRoutes.propTypes = {
  isAuth: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
