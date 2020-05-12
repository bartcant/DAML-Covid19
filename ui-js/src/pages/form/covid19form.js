import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the Details from the Covid19-Test
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstname"
            label="first name"
            type="text"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="last name"
            type="text"
            fullWidth
          />

            <TextField
            autoFocus
            margin="dense"
            id="email"
            label="email"
            type="email"
            fullWidth
          />

          <TextField
            autoFocus
            margin="dense"
            id="testdate"
            label="testdate"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="testtype"
            label="testtype"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="testresult"
            label="testresult"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}