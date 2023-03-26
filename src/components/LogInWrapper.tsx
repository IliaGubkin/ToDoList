import { useState } from "react";
import { LogIn } from "./LogIn";

export function LogInWrapper(props: any) {
  const [isLogedIn, setIsLogedIn] = useState(Boolean(localStorage.isLogedIn))
  return (
    <>
      {isLogedIn ? <div>{props.children}</div> : <LogIn setIsLogedIn={setIsLogedIn} />}
    </>
  );
}