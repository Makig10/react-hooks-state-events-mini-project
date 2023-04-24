import React,{useState} from "react";
import { CATEGORIES } from "../data";
/*CategoryFilter
Pass the list of categories to this component from App. 
Then, update this component to display <button> elements for each category (again, make sure to use a key prop).

When a button is clicked, the following should happen:

Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked 
are displayed.
If the button for "All" is selected, all the tasks should be displayed.*/


function handleClick(){
const[className,setClassName]=useState("")

return setClassName(className)="selected"

}

function CategoryFilter() {
  
  return (
    <div className="categories">
      < h5>Category filters</h5>
      {  CATEGORIES.map(category =>{
       return (

        <button onClick={handleClick} className="">{CATEGORIES[i]}</button>

       )})}

      
    
    </div>);
}
    

export default CategoryFilter;
