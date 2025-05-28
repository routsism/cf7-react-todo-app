import {Trash2} from "lucide-react";
import type {TodoListProps} from "../types.ts";

const TodoList = ({todos, dispatch}: TodoListProps) => {

    const handleDelete = (id:number) => () => {
        dispatch({type: "DELETE", payload: id});
    }

    return (
        <>
            <ul className="space-y-2">
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                        <span>{todo.text}</span>
                        <button
                            onClick={handleDelete(todo.id)}
                            className="bg-red-900"
                        >
                            <Trash2 size={18}/>

                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}


export default TodoList;