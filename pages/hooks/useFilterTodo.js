import { useMemo } from "react";

export const useFilterTodo = (todos, completed) => {
    const complete = useMemo(( )=> {
        if (completed === true) {
            return todos.filter(todo => todo.completed);
        }
        if (completed === false) {
            return todos.filter(todo =>!todo.completed);
        }
        if(completed === null) {
            return todos;
        }
    }, [todos, completed])
    return complete;
}