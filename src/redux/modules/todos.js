const ADD_TODO = 'todos/ADD_TODO'
const DELETE_TODO = 'todos/DELETE_TODO'
const EDIT_TODO = 'todos/EDIT_TODO'
const GET_ID = 'todos/GET_ID'

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload 
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export const editTodo = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}

export const getId = (payload) => {
    return {
        type: GET_ID,
        payload
    }
}

// 초기값
const initialState = {
    todos: [
      {
        id: "1",
        title: "리액트",
        body: "리액트를 배워봅시다",
        isDone: false,
      },
    ],
    todo: {
      id: "0",
      title: "",
      body: "",
      isDone: false,
    },
  };

// // 리듀서 : state에 변화를 일으키는 함수
// // input : state와 action
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case DELETE_TODO :
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
              }
        case EDIT_TODO :                
            return {
                ...state,
                todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                    ...todo,
                    isDone: !todo.isDone,
                    };
                } else {
                    return todo;
                }
                }),
            }
        case GET_ID :
            return {
                ...state,
                todo: state.todos.find((todo) => {
                  return todo.id === action.payload;
                }),
              };
        default :
            return state
    }
}

export default todos