import { Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { UpdateTaskForm } from "./UpdateTaskForm";
import classnames from "classnames";

export const Task = ({task}) => {
    const { id, name, completed } = task;
    const { isComplete, setIsComplete } = useState(completed);
    const { isDialogueOpen, setIsDialogueOpen } = useState(false);
    
    const handleUpdateTaskCompletion = () => {
        setIsComplete((prev) => !prev)
    }

    const handleDeleteTask = () => {
        console.log("delete task")
    }

  return (
    <div classname="task">
       <div className={classnames("flex", {
        done: isComplete
    })}>

    <Checkbox checked = {isComplete} onChange={ handleUpdateTaskCompletion } />
    <Typography variant="h4"> {name}</Typography>
   </div>
   <div className="taskButtons"> 
    <Button variant="contained" onClick={() => setIsDialogueOpen(true)}>
        <EditIcon />
    </Button>

    <Button 
    color="error"
    variant="contained"
    onClick={handleDeleteTask}>
        <DeleteIcon />
    </Button>
    </div>

    <UpdateTaskForm 
    isDialogueOpen={isDialogueOpen} 
    setIsDialogueOpen={setIsDialogueOpen}
    task={task}
    />
    
   </div>
  );
};
