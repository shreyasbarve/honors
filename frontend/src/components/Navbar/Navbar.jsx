import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

import { Link } from "react-router-dom";

export default function Navbar({ search }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.navbar}>
          <Link to="/" className={classes.link}>
            <Typography className={classes.title} variant="button" noWrap>
              STORIES
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
