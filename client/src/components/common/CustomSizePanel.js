import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { setColumns, setRows } from '../../redux/actions/gameActions.js'

const CustomSizePanel = () => {
  const dispatch = useDispatch()
  const [customButton, setCustomButton] = useState(-1)
  const cols = useSelector((s) => s.gameReducer.columns)
  const rows = useSelector((s) => s.gameReducer.rows)

  const onChangeX = (e) => {
    const max = Math.trunc(window?.innerWidth / 85) || 16
    console.log(window.innerWidth)
    e.target.value <= 0
      ? dispatch(setColumns(null))
      : dispatch(setColumns(Math.min(e.target.value, max)))
  }

  const onChangeY = (e) => {
    const max = Math.trunc(window?.innerHeight / 75) || 9
    e.target.value <= 0
      ? dispatch(setRows(null))
      : dispatch(setRows(Math.min(e.target.value, max)))
  }

  return (
    <>
      <button
        type="button"
        className="mb-1.5 transition duration-300 ease-in-out bg-purple-600 focus:text-black hover:bg-purple-900 text-white font-semibold py-2 w-48 mr-1 rounded"
        onClick={() => setCustomButton(customButton * -1)}
      >
        Custom
      </button>
      {customButton > 0 ? (
        <div>
          <div>
            <input
              type="number"
              value={cols}
              className="form-input mt-1 block w-48 text-center font-semibold text-gray-700 focus:text-black focus:shadow-md rounded"
              placeholder="COLS"
              onChange={onChangeX}
            />
          </div>
          <div>
            <input
              type="number"
              value={rows}
              className="form-input mt-1 block w-48 text-center font-semibold text-gray-700 focus:text-black focus:shadow-md rounded"
              placeholder="ROWS"
              onChange={onChangeY}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default CustomSizePanel
