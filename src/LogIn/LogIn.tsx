export function LogIn({ setIsLogedIn }: { setIsLogedIn: (elem: string) => void }) {
    function refreshHandler() {
        localStorage.setItem("isLogedIn", "true")
        setIsLogedIn("true")
    }
    return (
        <>
            <button onClick={refreshHandler}>Log In</button>
        </>
    )
}