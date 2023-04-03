export function LogOut() {
    function refreshHandler() {
        localStorage.removeItem("isLogedIn")
        window.location.reload()
    }
    return (
        <>
            <button onClick={refreshHandler}>Log Out</button>
        </>
    )
}