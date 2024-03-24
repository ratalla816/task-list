// RAFC -> Tab
import React, { useState } from "react"
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// materialUI basic text field
export const AddTaskForm = () => {
  const [newTask, setNewTask] = useState("");
  
  const addNewTask = () => {
    console.log("add new task clicked");
  } 
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
        <Button 
        disabled={!newTask.length}
        variant="outlined" 
        onClick={addNewTask}>
            <AddIcon />
        </Button>
    </div>
  );
};


