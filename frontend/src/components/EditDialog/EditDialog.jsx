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
import { updateStory } from "../../api";

export default function EditDialog({
  id,
  userData,
  reload,
  editDialogVisible,
  setEditDialogVisible,
}) {
  const toggleDialog = () => setEditDialogVisible(!editDialogVisible);
  const classes = useStyles();

  const [data, setData] = useState(userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateStory(data._id, data);
      toggleDialog();
      await reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Dialog open={editDialogVisible} onClose={toggleDialog}>
        <DialogTitle>Edit your story</DialogTitle>
        <Divider />
        <DialogContent className={classes.form}>
          <DialogContentText>What do you want to change?</DialogContentText>

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
            Update Story
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
