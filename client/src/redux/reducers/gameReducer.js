/* eslint-disable import/no-anonymous-default-export */
import t from '../types/gameActionTypes.js'

const initialState = {
  field: [],
  randomOrder: [],
  columns: null,
  rows: null,
  gameStatus: 'finish',
  rightCounter: 0,
  wrongCounter: 0,
  current: -1,
  hardmode: -1,
  levelTime: 1000,
  gameResult: null,
  rating: 0,
  level: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.FILL_FIELD:
      return {
        ...state,
        field: action.field
      }
    case t.FILL_RANDOM:
      return {
        ...state,
        randomOrder: [...action.random]
      }
    case t.SET_COLUMNS:
      return {
        ...state,
        columns: action.number
      }
    case t.SET_ROWS:
      return {
        ...state,
        rows: action.number
      }
    case t.SET_SQUARE:
      return {
        ...state,
        field: action.field
      }
    case t.SET_GAME_STATUS:
      return {
        ...state,
        gameStatus: action.status
      }
    case t.SET_CURRENT:
      return {
        ...state,
        current: action.current
      }
    case t.WRONG_ADD:
      return {
        ...state,
        wrongCounter: action.counter
      }
    case t.RIGHT_ADD:
      return {
        ...state,
        rightCounter: action.counter
      }
    case t.SET_GAME_RESULT:
      return {
        ...state,
        gameResult: action.result
      }
    case t.TURN_HARDMODE:
      return {
        ...state,
        hardmode: action.hardmode
      }
    case t.SET_NEW_TIME:
      return {
        ...state,
        levelTime: action.newTime
      }
    case t.SET_RATING:
      return {
        ...state,
        rating: action.newRating
      }
    case t.SET_LEVEL:
      return {
        ...state,
        level: action.newLevel
      }
    default:
      return state
  }
}
