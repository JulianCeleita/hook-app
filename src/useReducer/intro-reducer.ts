
// Reducer siempre debe retornar un estado, función pura también (todo se resuelve dentro de la misma función)
// Cambia el estado pero regresa uno nuevo. No muta el que ya estaba, crea uno.

export const initialState = [{
    id: 1,
    todo: 'Recolectar trigo',
    done: false,
}];

const todoReducer = ( state = initialState, action ={} )=> {        //Si no le doy un state, va a tomar el initialstate. El action le dice como quiero que cambie el estado

    if ( action.type === '[TODO] add todo') {
        return [ ...state, action.payload ]
    }

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar peces',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction )

console.log( todos )
