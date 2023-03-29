import { useState } from "react";
import { LogIn } from "./LogIn";

export function LogInWrapper(props: {children: JSX.Element}) {
  const [isLogedIn, setIsLogedIn] = useState(localStorage.isLogedIn)
  return (
    <>
      {isLogedIn ? <div>{props.children}</div> : <LogIn setIsLogedIn={setIsLogedIn} />}
    </>
  );
}