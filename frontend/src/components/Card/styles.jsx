import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "20px",
    "&:hover": {
      transition: "all 0.5s ease",
      transform: "scale(1.1)",
      zIndex: 500,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
