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