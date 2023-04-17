import React from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
const ThankYouDialog = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>Thank You!</DialogTitle>
        <DialogContent>
          <p>Your form has been submitted successfully.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  )
}

export default ThankYouDialog
