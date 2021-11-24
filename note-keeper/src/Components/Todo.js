import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((element) => element.id !== todo.id));
    }

    const taskCompleteHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item,
                    completed: !item.completed,
                };
            }
            return item;
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`} > {text}</li>

            <button onClick={taskCompleteHandler} className="complete-btn">
                <i>Finish Task</i>
            </button>

            <button onClick={deleteHandler} className="trash-btn">
                <i>Delete Task</i>
            </button>
        </div>
    );
};

export default Todo;
