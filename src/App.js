import React, {useState} from 'react';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import { nanoid } from "nanoid";


function App(props) {

  // handle the props 
  const [tasks, setTasks] = useState(props.tasks);

  //callback function 
  function addTask(name) {
    const newTask = { id: "todo-"+nanoid(), name: name, completed: false };
  setTasks([...tasks, newTask]);
  }

  //render the task list as an array 
  const taskList =tasks.map(task=>
  <Todo 
  id={task.id} 
  name={task.name} 
  completed={task.completed}
  key={task.id}
  />);
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       {taskList}
      </ul>
    </div>
  );
}
export default App;
