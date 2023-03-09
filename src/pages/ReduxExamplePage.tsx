import { useDispatch, useSelector } from "react-redux";
import {setCounter} from '../store/counterReducer';


export function ReduxExamplePage() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    // const inc = () => {dispatch(incrementCounter(state.counterReducer))};

    const inc = () => {
        dispatch(setCounter(state.counter.counter + 1));
    };

    return(
        <><button onClick={inc}>increment</button></>
    )
}