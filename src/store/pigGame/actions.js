export function setTime(time) {
    return (dispatch) => {
        dispatch({ type: "SET_TIME", payload: time });
    }
};

export function setChat(chat) {
    return (dispatch) => {
        dispatch({ type: "SET_CHAT", payload: chat });
    }
};

export function setChatValue(chatValue) {
    return (dispatch) => {
        dispatch({ type: "SET_CHAT_VALUE", payload: chatValue });
    }
};

export function setItemName(itemName) {
    return (dispatch) => {
        dispatch({ type: "SET_ITEM_NAME", payload: itemName });
    }
};