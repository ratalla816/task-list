import { Button, Checkbox, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";
import { UpdateTaskForm } from "./UpdateTaskForm";
import classnames from "classnames";

export const Task = ({task}) => {
    const { id, name, completed } = task;
    const { isComplete, setIsComplete } = useState(completed);
    const { isDialogOpen, setIsDialogOpen } = useState(false);
    
    const handleUpdateTaskCompletion = () => {
        setIsComplete((prev) => !prev);
    };

    const handleDeleteTask = () => {
        console.log("delete task");
    };

  return (
    <div className="task">
       <div className={classnames("flex", {
        done: isComplete
    })}>

    <Checkbox checked = { isComplete } onChange = { handleUpdateTaskCompletion } />
    <Typography variant="h4">{ name }</Typography>
   </div>
   <div className="taskButtons"> 
    <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
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
    isDialogOpen={isDialogOpen} 
    setIsDialogOpen={setIsDialogOpen}
    task={task}
    />
    
   </div>
  );
};
