import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from "react-router-dom"

import HardmodeButton from './common/HardmodeButton.js'
import PlayButton from './common/PlayButton.js'
import CustomSizePanel from './common/CustomSizePanel.js'

// import {
//   fillField,
//   setGameStatus,
//   setGameResult,
//   setCurrent,
//   setColumns,
//   setRows,
//   turnHardmode,
//   setNewTime,
//   setRating
// } from '../redux/reducers/gameReducer'

const MainMenu = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const menuButtonStyle = "mb-1.5 transition duration-300 ease-in-out bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 w-48 mr-1 rounded"

  // const cols = useSelector((s) => s.gameReducer.columns)
  // const rows = useSelector((s) => s.gameReducer.rows)

  // useEffect(() => dispatch(fillField(cols * rows)), [dispatch, cols, rows])
  // useEffect(() => dispatch(setGameStatus('finish')), [dispatch])

  const fieldSizeButtonsClick = (size) => {
    // if (size === 's') {
    //   dispatch(setColumns(5))
    //   dispatch(setRows(5))
    // }
    // if (size === 'm') {
    //   dispatch(setColumns(7))
    //   dispatch(setRows(7))
    // }
    // if (size === 'b') {
    //   dispatch(setColumns(9))
    //   dispatch(setRows(9))
    // }
  }

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex flex-col items-center w-72 h-96 bg-transparent text-black rounded-lg border-4 border-purple-500 custom-shadow-style pt-4 px-10">
          <button type="button" className={menuButtonStyle} onClick={() => fieldSizeButtonsClick('s')}>
            Small
          </button>
          <button type="button" className={menuButtonStyle} onClick={() => fieldSizeButtonsClick('m')}>
            Medium
          </button>
          <button type="button" className={menuButtonStyle} onClick={() => fieldSizeButtonsClick('b')} >
            Big
          </button>
          <CustomSizePanel />
          <HardmodeButton />
          <PlayButton />
        </div>
      </div>
      <div className="absolute top-4 left-2">
        <button
          className="transition duration-300 ease-in-out focus:outline-none focus:shadow-outline bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 w-24 mr-1 rounded"
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
