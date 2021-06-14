import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

import HardmodeButton from './common/HardmodeButton.js'
import PlayButton from './common/PlayButton.js'
import CustomSizePanel from './common/CustomSizePanel.js'

import { fillField, setGameStatusFinish, setColumns, setRows } from '../redux/actions/gameActions.js'

const MainMenu = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const mediumButtonDisabled = window?.innerWidth ? window?.innerWidth <= 600 : false
  const mediumButtonBackground = mediumButtonDisabled ? 'invisible' : 'visible'
  const bigButtonDisabled = window?.innerWidth ? window?.innerWidth <= 770 : false
  const bigButtonBackground = bigButtonDisabled ? 'invisible' : 'visible'

  const menuButtonStyle = 'mb-1.5 transition duration-300 ease-in-out font-semibold py-2 w-48 mr-1 rounded bg-purple-600 focus:text-black hover:bg-purple-900 text-white'

  const cols = useSelector((s) => s.gameReducer.columns)
  const rows = useSelector((s) => s.gameReducer.rows)

  useEffect(() => dispatch(fillField(cols * rows)), [dispatch, cols, rows])
  useEffect(() => dispatch(setGameStatusFinish(true)), [dispatch])

  const fieldSizeButtonsClick = (size) => {
    dispatch(setColumns(size))
    dispatch(setRows(size))
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex flex-col items-center w-72 h-96 bg-transparent text-black rounded-lg border-4 border-purple-500 custom-shadow-style pt-4 px-10">
          <button type="button" className={menuButtonStyle} onClick={() => fieldSizeButtonsClick(5)}>
            Small
          </button>
          <button
            disabled={mediumButtonDisabled}
            type="button"
            className={`${menuButtonStyle} ${mediumButtonBackground}`}
            onClick={() => fieldSizeButtonsClick(7)}
          >
            Medium
          </button>
          <button
            disabled={bigButtonDisabled}
            type="button"
            className={`${menuButtonStyle} ${bigButtonBackground}`}
            onClick={() => fieldSizeButtonsClick(9)}
          >
            Big
          </button>
          <CustomSizePanel />
          <HardmodeButton />
          <PlayButton />
        </div>
      </div>
      <div className="absolute top-4 left-2">
        <button
          className="transition duration-300 ease-in-out bg-purple-600 focus:text-black hover:bg-purple-900 text-white font-semibold py-2 w-24 mr-1 rounded"
          type="button"
          onClick={() => history.push('/rating')}
        >
          Best Scores
        </button>
      </div>
      <div className="absolute bottom-2 right-6 h-10 text-black text-lg font-semibold hidden md:block">
        Juravlev Dmitrii, 2021
      </div>
    </div>
  )
}

export default MainMenu
