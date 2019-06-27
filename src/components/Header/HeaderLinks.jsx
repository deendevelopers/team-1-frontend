/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link as RouterLink } from "react-router-dom";
import Link from '@material-ui/core/Link';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} component={RouterLink} to="/login">
          Login
        </Link>
        <Link className={classes.navLink} component={RouterLink} to="/register">
          Register
        </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
