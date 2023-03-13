const defaultState = {
    time: 0,
    chat: [""],
    chatValue: "",
    itemName: ""
  }
  
  export function pigGameReducer(state = defaultState, action) {
    switch (action.type) {
      case 'SET_TIME':
        return { ...state, time: action.payload }
      case 'SET_CHAT':
        return { ...state, chat: action.payload }
      case 'SET_CHAT_VALUE':
        return { ...state, chatValue: action.payload }
      case 'SET_ITEM_NAME':
        return { ...state, itemName: action.payload }
      default:
        return state
    }
  }

  export const setTime = (time) => (dispatch) => {
    dispatch({ type: "SET_TIME", payload: time });
  };

  export const setChat = (chat) => (dispatch) => {
    console.log("chat")
    dispatch({ type: "SET_CHAT", payload: chat });
  };
  
  export const setChatValue = (chatValue) => (dispatch) => {
    dispatch({ type: "SET_CHAT_VALUE", payload: chatValue });
  };
  
  export const setItemName = (itemName) => (dispatch) => {
    dispatch({ type: "SET_ITEM_NAME", payload: itemName });
  };