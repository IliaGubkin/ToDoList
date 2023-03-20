import Spline from "@splinetool/react-spline"
import { useEffect } from "react";
import {KeyboardEvent} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTime, setChat, setChatValue, setItemName } from "../store/pigGame/actions";

interface IItem {
    name: string,
    img: string
}

export function PigGame() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    
    const time = state.pigGame.time
    const chat = state.pigGame.chat
    const chatValue = state.pigGame.chatValue
    const itemName = state.pigGame.itemName

    const items = [
        {
            name: "mac",
            img: "https://github.com/IliaGubkin/ToDoList/blob/129d7f2fc21dd764cba5f89d93b781bdc8e448c8/20230303_124832.jpg?raw=true"
        },
        {
            name: "carrot",
            img: "https://cdn-icons-png.flaticon.com/512/5367/5367599.png"
        },
        {
            name: "gamepad",
            img: "https://cdn-icons-png.flaticon.com/512/626/626540.png"
        },
    ];

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        items.forEach((elem, index) => {
            if (String(index + 1) === event.key) {
                dispatch(setItemName(elem.name))
            }
        })
    };

    const workingHours = time >= 9 && time <= 18;

    function sendMessage() {
        let chatList = [...chat, chatValue]
    
        dispatch(setChat(chatList))
        dispatch(setChatValue(""))
    }

    useEffect(() => { setTimeout(() => { dispatch(setTime(time == 24 ? 0 : time + 1)) }, 1000) }, [time])

    return (
        <div onKeyDown={handleKeyDown} tabIndex={0}>
            <div className="toolbar">{
                items.filter((element: IItem) => workingHours ? element.name !== "gamepad" : element).map((element: IItem) => <img style={{ border: element.name === itemName ? "5.5px black solid" : "none" }} src={element.img} />)
            }
            </div>
            <div>
                {time}
            </div>
            <div className="chat">
                <div className="chat__form">
                    {chat.map(elem => <span>{elem}</span>)}
                </div>
                <div>
                    <input value={chatValue} onChange={element => dispatch(setChatValue(element.target.value))} placeholder="Отправить сообщение" />
                    <button onClick={sendMessage}>Чат</button>
                </div>
            </div>
            <Spline scene="https://prod.spline.design/G6OZ8y4F-4KubkDO/scene.splinecode" width="1365px" height="700px" />
        </div>
    )
}