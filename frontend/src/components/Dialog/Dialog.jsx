import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./styles";

// api
import { addStory } from "../../api";

export default function MyDialog({ reload, dialogVisible, setDialogVisible }) {
  const toggleDialog = () => setDialogVisible(!dialogVisible);
  const classes = useStyles();

  const initialState = {
    name: "",
    date: new Date().toDateString(),
    isrc: "",
    content: "",
  };

  const [data, setData] = useState(initialState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addStory(data);
      toggleDialog();
      setData(initialState);
      await reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={dialogVisible} onClose={toggleDialog}>
        <DialogTitle>Add your story</DialogTitle>
        <Divider />
        <DialogContent className={classes.form}>
          <DialogContentText>
            Enter the following details and we will add your story
          </DialogContentText>

          <div className={classes.inline}>
            <TextField
              autoFocus
              variant="outlined"
              margin="dense"
              name="name"
              label="Enter your name"
              fullWidth
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />

            <TextField
              variant="outlined"
              margin="dense"
              name="isrc"
              label="Enter your interests seperated by comma and no spaces"
              fullWidth
              value={data.isrc}
              onChange={(e) => setData({ ...data, isrc: e.target.value })}
            />

            <TextField
              variant="outlined"
              margin="dense"
              name="content"
              label="Enter your story"
              fullWidth
              multiline
              rows={10}
              value={data.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={toggleDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Story
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
