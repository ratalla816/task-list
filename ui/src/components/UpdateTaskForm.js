import React, { useState } from 'react';
import { Dialog, Button, DialogTitle, TextField } from '@mui/material';
import CheckIcon from "@mui/icons-material/Check";


export const UpdateTaskForm = ({ isDialogueOpen, setIsDialogueOpen, task }) => {
  const { id, completed } = task;
  const [taskName, setTaskName] = useState("");

  return (
    <Dialog open = { isDialogueOpen }>
    <DialogTitle>Edit Task</DialogTitle>
    <div className="dialogue">
    <TextField
    size="small"
    label="task"
    variant="outlined"
    onChange = {(e) => setTaskName(e.target.value)} />
    <Button variant = "contained" onClick = {() => { setIsDialogueOpen(false) }}>
       <CheckIcon />
     </Button>
    </div>
   </Dialog>
   );
  };
