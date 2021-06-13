import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import EndOfGame from './common/EndOfGame.js'
import GameField from './common/GameField.js'

import { fillRandom, gameplay } from '../redux/reducers/gameReducer.js'

const GamePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [level, setLevel] = useState(1)

  const result = useSelector((s) => s.gameReducer.gameResult)
  const rating = useSelector((s) => s.gameReducer.rating)

  useEffect(() => dispatch(fillRandom()), [dispatch])

  useEffect(() => {
    setTimeout(() => {
      dispatch(gameplay())
    }, 1000)
  }, [dispatch])

  const menuButtonOnClick = () => {
    history.push('/')
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        {result ? <EndOfGame /> : <GameField />}
      </div>
      <div className="absolute top-4 left-2">
        <button
          className="transition duration-300 ease-in-out bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 w-20 mr-1 rounded"
          type="button"
          onClick={menuButtonOnClick}
        >
          MENU
        </button>
        <div className="text-black font-bold">Level: {level}</div>
        <div className="text-black font-bold">Score: {rating.toFixed(2)}</div>
      </div>
    </div>
  )
}

export default GamePage
