import { fetchUserData } from "features/authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import SignUp from "screens/Signup";
import PrivateRoute from "./PrivateRoute";

function BaseRouter() {

  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token){
      dispatch(fetchUserData(token))
    }
  },[dispatch])

  return (
    <Switch>
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={Home} />
      <Redirect to={"/404"} />
    </Switch>
  );
}

export default BaseRouter;
