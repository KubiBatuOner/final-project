/* eslint-disable react/prop-types */
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  console.log("private'e erişmeye çalışıyor");

  const token = localStorage.getItem("token");
  return (
    <Route
      render={() => (token ? <>{children}</> : <Redirect to="/login" />)}
    />
  );
};

export default PrivateRoute;
