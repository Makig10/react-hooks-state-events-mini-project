import React from "react";
import { TASKS } from "../data";


/*TaskList
First, we'll want to display all the tasks in our app. Pass down the task data from App to TaskList,
 and display each task using the Task component. Make sure to use a key prop!*/

 function TaskList() {
  return(
    TASKS.map(task=>{
    return (
    <div className="tasks">
    <li key={task.id} >{task.text},{task.category}</li>
    </div>
  )}))
 }
      

      
  


export default TaskList;
