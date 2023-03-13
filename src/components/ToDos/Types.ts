export interface IToDo {
    id: number,
    title: string,
    completed: boolean
}

export type TSingleToDo = IToDo[]

export interface IAddToDo {
    toDoList: TSingleToDo,
    setToDoList: (elem: TSingleToDo) => void
}

export interface IToDoComplete {
    toDoList: TSingleToDo,
}

export interface IToDoList {
    toDoListPaginator: TSingleToDo,
    setToDoList: (elem: TSingleToDo) => void
}

export interface ICloseButton {
    toDoList: TSingleToDo,
    deleteToDo: (elem: number) => void
}

export interface IToDoTitle {
    toDoList: TSingleToDo,
    saveToDo: (elem: number) => void, 
}