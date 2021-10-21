import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    margin: "0 5rem",
  },
  appbar: {
    backgroundColor: "#fff",
    borderRadius: "50px",
  },
  navbar: {
    justifyContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
  title: {
    flexGrow: 1,
    fontSize: "1.5rem",
  },
}));
