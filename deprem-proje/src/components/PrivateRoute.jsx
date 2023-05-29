import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("private'e erişmeye çalışıyor");

  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
