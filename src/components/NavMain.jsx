import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import Signin from "./Dialogs/Signin";
import Signup from "./Dialogs/Signup";
import "../styles/NavMain.css";
import AppLogo from "../app-logo.png";
const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <img style={{ height: "45px" }} src={AppLogo} alt="logo" />
      </NavLink>
      <ul className="nav-list">
        {context.isLoggedIn && (
          <React.Fragment>
            <li>
              <NavLink to="/scheduler">Scheduler</NavLink>
            </li>
            <li>
              <NavLink to="/team">Manage Teams</NavLink>
            </li>
            <li>
              <NavLink to="/user">Manage Users</NavLink>
            </li>

            <li>
              <NavLink to="/profile">
                {context.user && context.user.email}
              </NavLink>
            </li>
            <li>
              <p onClick={handleLogout}>Logout</p>
            </li>
          </React.Fragment>
        )}
        {!context.isLoggedIn && (
          <React.Fragment>
            <li>
              <Signin />
            </li>
            <li>
              <Signup />
            </li>
          </React.Fragment>
        )}
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
