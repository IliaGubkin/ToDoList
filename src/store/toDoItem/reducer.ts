import { IAction } from "../Types"

interface IToDo {
  toDoList: object,
  pageNumber: number,
  toDoListPaginator: object,
  completed: boolean,
  completedTask: object
}

const defaultState: IToDo = {
  toDoList: localStorage.todo ? JSON.parse(localStorage.todo) : [],
  pageNumber: 1,
  toDoListPaginator: [],
  completed: false,
  completedTask: []
}

export function toDoItemReducer(state = defaultState, action: IAction) {
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