import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...theRest }) {
  return (
    <Route
      {...theRest}
      render={(props) => {
        const token = localStorage.getItem("token");

        if (!token) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;