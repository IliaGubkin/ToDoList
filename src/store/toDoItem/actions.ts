export function setToDoList(toDoList: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_TODO_LIST", payload: toDoList });
    }
};

export function setPageNumber(pageNumber: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_PAGE_NUMBER", payload: pageNumber });
    }
};

export function setToDoListPaginator(toDoListPaginator: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_TODO_PAGINATOR", payload: toDoListPaginator });
    }
};

export function setCompleted(completed: boolean) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_COMPLETED", payload: completed });
    }
};

export function setCompletedTask(completedTask: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_COMPLETED_TASK", payload: completedTask });
    }
};