import React from "react";
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";
import Tasks from './Tasks';
import CompletedTasks from './CompletedTasks';
import Layout from "./Layout";
import NewTask from "./NewTask";



const Todo = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/completedTasks">Completed Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/new-task">New Tasks</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" Component={Layout}>
          <Route path="tasks" Component={Tasks} />
          <Route path="completedTasks" Component={CompletedTasks} />
          <Route path="new-task" Component={NewTask} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
export default Todo;
