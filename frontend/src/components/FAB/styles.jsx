import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  fabRoot: {
    backgroundColor: "red",
  },
  fabMain: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));
