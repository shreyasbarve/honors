import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

// api
import { deleteStory } from "../../api/index";

export default function AlertDialog({ id, openAlert, setOpenAlert, reload }) {
  const handleAlertVisible = () => setOpenAlert(!openAlert);

  const handleDelete = async () => {
    try {
      await deleteStory(id);
      await reload();
      handleAlertVisible();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog open={openAlert} onClose={handleAlertVisible}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this story?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAlertVisible} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
