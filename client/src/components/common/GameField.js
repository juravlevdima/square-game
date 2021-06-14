import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  setSquare,
  setCurrent,
  rightCounterAdd,
  wrongCounterAdd,
  updateRandom,
  setRating
} from '../../redux/actions/gameActions.js'

const GameField = () => {
  const dispatch = useDispatch()
  const SQUARE_SIZE = 'w-16 h-16'

  const field = useSelector((s) => s.gameReducer.field)
  const cols = useSelector((s) => s.gameReducer.columns)
  const hardmode = useSelector((s) => s.gameReducer.hardmode)
  const time = useSelector((s) => s.gameReducer.levelTime)

  const squareOnClick = (idx) => {
    dispatch(rightCounterAdd())
    dispatch(setCurrent(2))
    dispatch(setRating(1 / (time / 1000)))
    dispatch(setSquare(idx, 2))
  }

  const graySquareOnClick = (idx) => {
    dispatch(wrongCounterAdd())
    dispatch(updateRandom(idx))
    dispatch(setRating(-0.6))
    dispatch(setSquare(idx, -1))
  }

  return (
    <div className="flex flex-wrap mx-auto " style={{ width: `${cols * 18 * 0.25}rem` }}>
      {field.map((it, idx) => {
        const buttonDisabbled = it === 1 || (it === 0 && hardmode === 1) ? 0 : 1

        let color = 'bg-gray-500'
        if (it === 0) color = 'bg-gray-500'
        if (it === 1) color = 'bg-yellow-500'
        if (it === 2) color = 'bg-green-500'
        if (it === -1) color = 'bg-red-600'

        return (
          <button
            disabled={buttonDisabbled}
            type="button"
            className={`flex items-center justify-center border border-black ${SQUARE_SIZE} m-1 ${color}`}
            key={idx}
            onClick={() => (it === 1 ? squareOnClick(idx) : graySquareOnClick(idx))}
          >
            {null}
          </button>
        )
      })}
    </div>
  )
}

export default GameField
