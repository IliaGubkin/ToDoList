export const setTime = (time) => (dispatch) => {
    dispatch({ type: "SET_TIME", payload: time });
};

export const setChat = (chat) => (dispatch) => {
    dispatch({ type: "SET_CHAT", payload: chat });
};

export const setChatValue = (chatValue) => (dispatch) => {
    dispatch({ type: "SET_CHAT_VALUE", payload: chatValue });
};

export const setItemName = (itemName) => (dispatch) => {
    dispatch({ type: "SET_ITEM_NAME", payload: itemName });
};