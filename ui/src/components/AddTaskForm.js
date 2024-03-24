// RAFC -> Tab
import React, { useState } from "react"
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// materialUI basic text field
export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");
    return (
    <div>
        <Typography align='center' variant='h2' paddingTop={2} paddingBottom={2}>
        My Task List
        </Typography>
        <TextField 
        size="small" 
        label="Task" 
        variant="outlined" 
        value={newTask} 
        onChange={(e) => setNewTask(e.target)} />
        <Button>
            <AddIcon />
        </Button>
    </div>
  );
};


