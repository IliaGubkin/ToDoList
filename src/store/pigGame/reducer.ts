import { IAction } from "../Types"

interface IPigGame {
  time: number,
  chat: object,
  chatValue: string,
  itemName: string
}

const defaultState: IPigGame = {
  time: 0,
  chat: [""],
  chatValue: "",
  itemName: ""
}

export function pigGameReducer(state = defaultState, action: IAction) {
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