const defaultState = {
    toDoList: localStorage.todo ? JSON.parse(localStorage.todo) : [],
    pageNumber: 1,
    toDoListPaginator: [],
    completed: false,
    completedTask: []
  }
  
  export function toDoItemReducer(state = defaultState, action) {
    switch (action.type) {
      case 'SET_TODO_LIST':
        return { ...state, toDoList: action.payload }
      case 'SET_PAGE_NUMBER':
        return { ...state, pageNumber: action.payload }
      case 'SET_TODO_PAGINATOR':
        return { ...state, toDoListPaginator: action.payload }
      case 'SET_COMPLETED':
        return { ...state, completed: action.payload }
      case 'SET_COMPLETED_TASK':
        return { ...state, completedTask: action.payload }
      default:
        return state
    }
  }

  export const setToDoList = (toDoList) => (dispatch) => {
    dispatch({ type: "SET_TODO_LIST", payload: toDoList });
  };

  export const setPageNumber = (pageNumber) => (dispatch) => {
    dispatch({ type: "SET_PAGE_NUMBER", payload: pageNumber });
  };
  
  export const setToDoListPaginator = (toDoListPaginator) => (dispatch) => {
    dispatch({ type: "SET_TODO_PAGINATOR", payload: toDoListPaginator });
  };
  
  export const setCompleted = (completed) => (dispatch) => {
    dispatch({ type: "SET_COMPLETED", payload: completed });
  };
  
  export const setCompletedTask = (completedTask) => (dispatch) => {
    dispatch({ type: "SET_COMPLETED_TASK", payload: completedTask });
  };