import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import EndOfGame from './common/EndOfGame.js'
import GameField from './common/GameField.js'

import { fillRandom, gameplay } from '../redux/actions/gameActions.js'

const GamePage = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const result = useSelector((s) => s.gameReducer.gameResult)
  const rating = useSelector((s) => s.gameReducer.rating)
  const level = useSelector((s) => s.gameReducer.level)

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
          className="transition duration-300 ease-in-out bg-purple-600 focus:text-black hover:bg-purple-900 text-white font-semibold py-2 w-20 mr-1 rounded"
          type="button"
          onClick={menuButtonOnClick}
        >
          MENU
        </button>
        <div className="text-black font-bold">Level: {level}</div>
        <div className="text-black font-bold">Score: {Math.trunc(rating * 100)}</div>
      </div>
    </div>
  )
}

export default GamePage
