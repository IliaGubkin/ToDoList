export function setToDoList(toDoList) {
    (dispatch) => {
        dispatch({ type: "SET_TODO_LIST", payload: toDoList });
    }
};

export function setPageNumber(pageNumber) {
    (dispatch) => {
        dispatch({ type: "SET_PAGE_NUMBER", payload: pageNumber });
    }
};

export function setToDoListPaginator(toDoListPaginator) {
    (dispatch) => {
        dispatch({ type: "SET_TODO_PAGINATOR", payload: toDoListPaginator });
    }
};

export function setCompleted(completed) {
    (dispatch) => {
        dispatch({ type: "SET_COMPLETED", payload: completed });
    }
};

export function setCompletedTask(completedTask) {
    (dispatch) => {
        dispatch({ type: "SET_COMPLETED_TASK", payload: completedTask });
    }
};