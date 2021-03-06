import { fetchUserData } from "features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import ApplicationManagement from "screens/ApplicationManagement";
import Application from "screens/Application";
import CreatePlant from "screens/CreatePlant";
import Home from "screens/Home";
import Login from "screens/Login";
import Plants from "screens/Plants";
import SignUp from "screens/Signup";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "screens/Dashboard";
import Issues from "screens/Issues";
import Links from "screens/Links";

function BaseRouter() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
      dispatch(fetchUserData(token));
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={Home} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/management" exact component={ApplicationManagement} />
      <PrivateRoute path="/management/create" exact component={Application} />
      <PrivateRoute path="/management/plants/create" component={CreatePlant} />
      <PrivateRoute path="/management/plants" component={Plants} />
      <PrivateRoute path="/management/:shortName" exact component={Application} />
      <PrivateRoute path="/issues" component={Issues } />
      <PrivateRoute path="/links" component={Links } />
      <Redirect to={"/404"} />
    </Switch>
  );
}

export default BaseRouter;
