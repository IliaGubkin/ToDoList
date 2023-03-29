export function setTime(time: number) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_TIME", payload: time });
    }
};

export function setChat(chat: object) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_CHAT", payload: chat });
    }
};

export function setChatValue(chatValue: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_CHAT_VALUE", payload: chatValue });
    }
};

export function setItemName(itemName: string) {
    return (dispatch: (elem: {}) => void) => {
        dispatch({ type: "SET_ITEM_NAME", payload: itemName });
    }
};