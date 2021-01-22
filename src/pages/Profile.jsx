import React from "react";
import { withUser } from "../components/Auth/withUser.jsx";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
const Profile = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar className={classes.orange}>
          {props.context.user.firstName.charAt(0)}
          {props.context.user.lastName.charAt(0)}
        </Avatar>
      </div>
      <h1>Welcome {props.context.user.firstName}</h1>
    </div>
  );
};

export default withUser(Profile);
