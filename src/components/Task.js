import React , {useState}from "react";
import TaskList from "./TaskList";
/*Task
Update the Task component so that it shows the task's text and category.

When the delete button is clicked, the task should be removed from the list.*/
function handleClick(){
const [text,setText]=useState({text})
return setText(text="")
}

function Task() {
  return (
    <div className="task">
      <div className="label">{props.category}</div>
      <div className="text">{props.text}</div>
      <button onClick={handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
