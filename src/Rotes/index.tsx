import { Route, Switch, Router } from "react-router-dom";
import Dash from "../Dashboard";
import Login from "../Login";
const pathHome = "/";
const dashboard = "/dashboard";
const Rotes = () => {
  return (
    <Switch>
      <Route exact path={pathHome}>
        <Login />
      </Route>
      <Route path={dashboard}>
        <Dash />
      </Route>
    </Switch>
  );
};
export default Rotes;
