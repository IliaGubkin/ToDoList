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
    setCompleted: (elem: boolean) => void,
    completed: boolean
}

export interface IToDoList extends IToDoComplete {
    toDoListPaginator: TSingleToDo,
    setToDoList: (elem: TSingleToDo) => void
}

export interface ICloseButton {
    toDoList: TSingleToDo,
    deleteToDo: (elem: number) => void
}

export interface IToDoTitle {
    toDoList: TSingleToDo,
    edit: null, 
    setTitleValue: (elem: string) => void, 
    titleValue: string, 
    saveToDo: (elem: number) => void, 
    editToDo: (id: number, title: string) => void
}