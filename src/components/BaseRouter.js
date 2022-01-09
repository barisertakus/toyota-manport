import { Redirect, Switch } from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import PrivateRoute from "./PrivateRoute";

function BaseRouter() {
  return (
    <Switch>
      <PrivateRoute path="/login" component={Login} />
      <PrivateRoute path="/" exact component={Home} />
      <Redirect to={"/404"} />
    </Switch>
  );
}

export default BaseRouter;
