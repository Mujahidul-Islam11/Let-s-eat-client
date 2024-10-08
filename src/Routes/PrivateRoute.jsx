import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center flex justify-center py-12">
        <svg id="svgStyle" viewBox="0 0 50 50">
          <circle className="ring" cx="25" cy="25" r="20"></circle>
          <circle className="ball" cx="25" cy="5" r="3.5"></circle>
        </svg>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
