import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
        // console.log(todo)
    }

    return (
        <div className="todo">
            <li className="todo-item"> {text}</li>

            <button className="complete-btn">
                <i>Edit</i>
            </button>

            <button onClick={deleteHandler} className="trash-btn">
                <i>Delete</i>
            </button>
        </div>
    );
};

export default Todo;
