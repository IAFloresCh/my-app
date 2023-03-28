import React, { useState } from "react";
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Tarea 1" },
        { id: 2, title: "Tarea 2" },
        { id: 3, title: "Tarea 3" }
    ]);

    const [completedTodos, setCompletedTodos] = useState([]);

    const handleCompleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        const completedTodo = todos.find((todo) => todo.id === id);
        setCompletedTodos([...completedTodos, completedTodo]);
        setTodos(updatedTodos);
    };

    //TodoComplete
    function TodoComplete({ completedTodos }) {
        return (
            <div>
                <h2>Tareas completadas:</h2>
                <ul>
                    {completedTodos.map((todo) => (
                        <li>{todo.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
    //TodoItem
    function TodoItem({ todo, onCompleteTodo }) {
        const handleCompleteClick = () => {
            onCompleteTodo && onCompleteTodo(todo.id);
        };

        return (
            <li>
                {todo.title}
                <button onClick={handleCompleteClick}>Completar</button>
            </li>
        );
    }

    return (
        <div>
            <h2>Tareas por hacer:</h2>
            <ul>
                {todos.map((todo) => (
                    <TodoItem todo={todo} onCompleteTodo={handleCompleteTodo} />
                ))}
            </ul>
            <TodoComplete completedTodos={completedTodos} />
        </div>
    );
}

export default TodoList;
