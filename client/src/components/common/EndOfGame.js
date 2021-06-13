import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import {
  fillField,
  fillRandom,
  gameplay,
  setCurrent,
  setGameStatus,
  setGameResult,
  setNewTime,
  setLevel
} from '../../redux/reducers/gameReducer.js'

const EndOfGame = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [okButtonIsDisabled, setOkButtonIsDisabled] = useState(true)
  const [playerName, setPlayerName] = useState('')

  const okButtonBackground = okButtonIsDisabled
    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
    : 'bg-purple-700 hover:bg-purple-900 text-white'

  const rows = useSelector((s) => s.gameReducer.rows)
  const cols = useSelector((s) => s.gameReducer.columns)
  const rating = useSelector((s) => s.gameReducer.rating)
  const level = useSelector((s) => s.gameReducer.level)
  const result = useSelector((s) => s.gameReducer.gameResult)

  const nextLevelOnClick = () => {
    dispatch(fillField(cols * rows))
    dispatch(setGameStatus('start'))
    dispatch(setGameResult(null))
    dispatch(setNewTime())
    dispatch(fillRandom())
    dispatch(setCurrent(-1))
    dispatch(gameplay())
    dispatch(setLevel(level + 1))
  }

  const onChangePlayerName = (e) => {
    setPlayerName(e.target.value)
    if (e.target.value === '') {
      setOkButtonIsDisabled(true)
    } else setOkButtonIsDisabled(false)
  }

  const OKButtonOnClick = () => {
    setOkButtonIsDisabled(true)
    axios({
      method: 'POST',
      url: '/api/v1/rating',
      data: {
        name: playerName.replace(/\s/g, '_'),
        rating
      }
    })
    setTimeout(() => history.push('/rating'), 1100)
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-6xl pb-10">{result}</div>
      {result === 'You Win!' ? (
        <button
          className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 w-36 rounded"
          type="button"
          onClick={nextLevelOnClick}
        >
          Next Level
        </button>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div>Enter your Name:</div>
          <input
            className="form-input mt-1 block w-56 h-10 mb-2 text-center font-semibold text-gray-700 focus:text-black rounded outline-none"
            type="text"
            onChange={onChangePlayerName}
          />
          <button
            className={`transition duration-300 ease-in-out focus:outline-none focus:shadow-outline ${okButtonBackground} font-semibold py-2 w-16 rounded`}
            type="button"
            onClick={() => OKButtonOnClick()}
            disabled={okButtonIsDisabled}
          >
            OK
          </button>
        </div>
      )}
    </div>
  )
}

export default EndOfGame
