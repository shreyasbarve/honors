import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "1rem",
    backgroundColor: "#fff",
    height: "100vh",
    paddingInline: "8rem",
    paddingTop: "5rem",
  },
  media: {
    marginTop: "1rem",
    height: "10rem",
    textAlign: "center",
    justifyItems: "center",
  },
  top: {
    marginBottom: "2rem",
    paddingInline: "5rem",
  },
  name: {
    fontSize: "1rem",
  },
  date: {
    fontSize: "1rem",
  },
  bottom: {
    marginTop: "2rem",
    paddingInline: "5rem",
  },
  content: {
    fontSize: "1.5rem",
  },
}));
