import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Service from "./components/Home/Service/Service";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/Login/Privateroute/PrivateRoute";
import NotFound from "./components/Shared/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/service">
            <Service></Service>
          </Route>

          <PrivateRoute to="/bookVehicle/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
