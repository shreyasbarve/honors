import React from "react";
import { Fab, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { useStyles } from "../../components/FAB/styles";

export default function FAB({ dialogVisible, setDialogVisible }) {
  const classes = useStyles();

  const handleAdd = () => {
    setDialogVisible(!dialogVisible);
  };

  return (
    <div className={classes.fabRoot}>
      <Tooltip title="Add your story">
        <Fab onClick={handleAdd} className={classes.fabMain} color="secondary">
          <Add />
        </Fab>
      </Tooltip>
    </div>
  );
}
