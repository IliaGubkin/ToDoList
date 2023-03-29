export function setToDoList(toDoList) {
    return (dispatch) => {
        dispatch({ type: "SET_TODO_LIST", payload: toDoList });
    }
};

export function setPageNumber(pageNumber) {
    return (dispatch) => {
        dispatch({ type: "SET_PAGE_NUMBER", payload: pageNumber });
    }
};

export function setToDoListPaginator(toDoListPaginator) {
    return (dispatch) => {
        dispatch({ type: "SET_TODO_PAGINATOR", payload: toDoListPaginator });
    }
};

export function setCompleted(completed) {
    return (dispatch) => {
        dispatch({ type: "SET_COMPLETED", payload: completed });
    }
};

export function setCompletedTask(completedTask) {
    return (dispatch) => {
        dispatch({ type: "SET_COMPLETED_TASK", payload: completedTask });
    }
};