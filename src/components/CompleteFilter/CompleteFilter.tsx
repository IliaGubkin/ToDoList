interface ICompleteFilter {
    editCompleted: () => void,
    editInCompleted: () => void
}

export function CompleteFilter({ editCompleted, editInCompleted }: ICompleteFilter) {
    return (
        <>
            <button className="completed-button" onClick={editCompleted}>гото<br />вые</button>
            <button className="incompleted-button" onClick={editInCompleted}>негот<br />овые</button>
        </>
    )
}