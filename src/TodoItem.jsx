import React from "react";

function TodoItem({todo}) {

    return (
        <li>
            {todo.title}
            <button>Completar</button>
        </li>
    );
}

export default TodoItem;
