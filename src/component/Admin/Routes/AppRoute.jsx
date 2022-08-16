import { Box, Toolbar } from "@mui/material";
import React, { useState, useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "../../common/Header/Header";
import Dashboard from "../pages/Dashboard/Dashboard";
import Profile from "../pages/Profile/Profile";
import Arbitrator from "../pages/Notification/ArbitatorNotification";
import Login from "../../common/Login/Login";
import { useSelector } from "react-redux";

function AppRoute(props) {
  const [login, setLogin] = useState(false);

  const user = useSelector((state) => state.user.currentUser);

  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return login ? "" : <Redirect to="/login" />;
            }}
          />
          <Route exact path="/login">
            {user ? <Redirect to="/dashboard" /> : <Login />}
          </Route>

          {user ? (
            <>
              <Box sx={{ display: "flex" }}>
                <Header />
                <Box
                  component="main"
                  sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
                >
                  <Toolbar />
                  <Route component={Dashboard} path="/dashboard" />
                  <Route component={Profile} path="/casedetails/:id" />
                  <Route component={Arbitrator} path="/notification" />
                </Box>
              </Box>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default AppRoute;
