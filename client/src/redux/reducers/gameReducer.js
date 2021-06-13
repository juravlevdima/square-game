/* eslint-disable import/no-anonymous-default-export */
const FILL_FIELD = 'FILL_FIELD'
const FILL_RANDOM = 'FILL_RANDOM'
const SET_SQUARE = 'SET_SQUARE'
const SET_GAME_STATUS = 'SET_GAME_STATUS'
const SET_CURRENT = 'SET_CURRENT'
const WRONG_ADD = 'WRONG_ADD'
const RIGHT_ADD = 'RIGHT_ADD'
const SET_GAME_RESULT = 'SET_GAME_RESULT'
const SET_COLUMNS = 'SET_COLUMNS'
const SET_ROWS = 'SET_ROWS'
const SET_NEW_TIME = 'SET_NEW_TIME'
const TURN_HARDMODE = 'TURN_HARDMODE'
const SET_RATING = 'SET_RATING'
const SET_LEVEL = 'SET_LEVEL'

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
    case FILL_FIELD: {
      return {
        ...state,
        field: action.field
      }
    }
    case FILL_RANDOM: {
      return {
        ...state,
        randomOrder: [...action.random]
      }
    }
    case SET_COLUMNS: {
      return {
        ...state,
        columns: action.number
      }
    }
    case SET_ROWS: {
      return {
        ...state,
        rows: action.number
      }
    }
    case SET_SQUARE: {
      return {
        ...state,
        field: action.field
      }
    }
    case SET_GAME_STATUS: {
      return {
        ...state,
        gameStatus: action.status
      }
    }
    case SET_CURRENT: {
      return {
        ...state,
        current: action.current
      }
    }
    case WRONG_ADD: {
      return {
        ...state,
        wrongCounter: action.counter
      }
    }
    case RIGHT_ADD: {
      return {
        ...state,
        rightCounter: action.counter
      }
    }
    case SET_GAME_RESULT: {
      return {
        ...state,
        gameResult: action.result
      }
    }
    case TURN_HARDMODE: {
      return {
        ...state,
        hardmode: action.hardmode
      }
    }
    case SET_NEW_TIME: {
      return {
        ...state,
        levelTime: action.newTime
      }
    }
    case SET_RATING: {
      return {
        ...state,
        rating: action.newRating
      }
    }
    case SET_LEVEL: {
      return {
        ...state,
        level: action.newLevel
      }
    }
    default:
      return state
  }
}

export function fillField(len) {
  return (dispatch) => {
    dispatch({ type: FILL_FIELD, field: Array(len).fill(0) })
  }
}

export function fillRandom() {
  return (dispatch, getState) => {
    const store = getState()
    const { field } = store.gameReducer
    const randomOrder = Array(field.length)
      .fill(0)
      .map((it, idx) => idx)
      .sort(() => Math.random() - 0.5)

    dispatch({ type: FILL_RANDOM, random: randomOrder })
  }
}

export function updateRandom(index) {
  return (dispatch, getState) => {
    const store = getState()
    const { randomOrder } = store.gameReducer

    const updatedRandom = randomOrder.filter((it) => it !== index)
    dispatch({ type: FILL_RANDOM, random: updatedRandom })
  }
}

export function setColumns(number) {
  return (dispatch) => {
    dispatch({ type: SET_COLUMNS, number })
  }
}

export function setRows(number) {
  return (dispatch) => {
    dispatch({ type: SET_ROWS, number })
  }
}

export function setSquare(idx, status) {
  return (dispatch, getState) => {
    const store = getState()
    let { field } = store.gameReducer
    field = field.map((it, index) => (index === idx ? status : it))
    dispatch({ type: SET_SQUARE, field })
  }
}

export function setGameStatus(status) {
  return (dispatch) => {
    dispatch({ type: SET_GAME_STATUS, status })
  }
}

export function setCurrent(stat) {
  return (dispatch) => {
    dispatch({ type: SET_CURRENT, current: stat })
  }
}

export function wrongCounterAdd(number = 1) {
  return (dispatch, getState) => {
    const store = getState()
    const { wrongCounter } = store.gameReducer
    if (number === 1) {
      dispatch({ type: WRONG_ADD, counter: wrongCounter + number })
    } else if (number === 0) {
      dispatch({ type: WRONG_ADD, counter: 0 })
    }
  }
}

export function rightCounterAdd(number = 1) {
  return (dispatch, getState) => {
    const store = getState()
    const { rightCounter } = store.gameReducer
    if (number === 1) {
      dispatch({ type: RIGHT_ADD, counter: rightCounter + number })
    } else if (number === 0) {
      dispatch({ type: RIGHT_ADD, counter: 0 })
    }
  }
}

export function setGameResult(result) {
  return (dispatch) => {
    dispatch({ type: SET_GAME_RESULT, result })
  }
}

export function turnHardmode() {
  return (dispatch, getState) => {
    const store = getState()
    const { hardmode } = store.gameReducer
    dispatch({ type: TURN_HARDMODE, hardmode: hardmode * -1 })
  }
}

export function setNewTime(reset) {
  return (dispatch, getState) => {
    const store = getState()
    const { levelTime } = store.gameReducer
    let newTime = reset ? 1000 : levelTime - levelTime * 0.05
    if (newTime < 500) newTime = 500
    dispatch({ type: SET_NEW_TIME, newTime })
  }
}

export function setRating(points, reset) {
  return (dispatch, getState) => {
    const store = getState()
    const { rating, hardmode } = store.gameReducer

    const hardmodePoints = hardmode > 0 ? 0.2 : 0

    const newRating = reset ? 0 : Math.max(rating + points + hardmodePoints, 0)
    dispatch({ type: SET_RATING, newRating })
  }
}

export function setLevel(num) {
  return (dispatch) => {
    dispatch({ type: SET_LEVEL, newLevel: num })
  }
}

export function gameplay(i = 0, time) {
  return (dispatch, getState) => {
    const store = getState()
    const {
      field,
      randomOrder,
      gameStatus,
      current,
      wrongCounter,
      rightCounter,
      hardmode,
      levelTime
    } = store.gameReducer

    time = time || Math.max(levelTime, 500)

    const { length } = field

    if (wrongCounter >= length / 2 || rightCounter >= length / 2) {
      dispatch(setGameStatus('finish'))
    }

    if (gameStatus !== 'finish') {
      dispatch(setSquare(randomOrder[i], 1))
      if (i) {
        if (current === -1) {
          dispatch(wrongCounterAdd())
          dispatch(setRating(-0.5))
          dispatch(setSquare(randomOrder[i - 1], current))
        }
        dispatch(setCurrent(-1))
      }

      let newTime = time
      if (hardmode > 0 && current === 2) {
        newTime -= time * 0.05
        if (newTime < 500) newTime = 500
      }
      if (hardmode > 0 && current === -1) {
        newTime += time * 0.05
        if (newTime > levelTime) newTime = levelTime
      }

      setTimeout(() => dispatch(gameplay(i + 1, newTime)), time)
      if (i >= length) dispatch(setGameStatus('finish'))
    }

    if (gameStatus === 'finish') {
      dispatch(setGameResult(rightCounter > wrongCounter ? 'You Win!' : 'Game Over'))
      dispatch(wrongCounterAdd(0))
      dispatch(rightCounterAdd(0))
    }
  }
}
