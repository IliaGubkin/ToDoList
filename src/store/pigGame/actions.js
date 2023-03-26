export function setTime(time) {
    (dispatch) => {
        dispatch({ type: "SET_TIME", payload: time });
    }
};

export function setChat(chat) {
    (dispatch) => {
        dispatch({ type: "SET_CHAT", payload: chat });
    }
};

export function setChatValue(chatValue) {
    (dispatch) => {
        dispatch({ type: "SET_CHAT_VALUE", payload: chatValue });
    }
};

export function setItemName(itemName) {
    (dispatch) => {
        dispatch({ type: "SET_ITEM_NAME", payload: itemName });
    }
};