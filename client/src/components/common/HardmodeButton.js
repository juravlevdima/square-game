import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { turnHardmode } from '../../redux/actions/gameActions.js'

const HardmodeButton = () => {
  const dispatch = useDispatch()

  const hard = useSelector((s) => s.gameReducer.hardmode)
  const hardButtonBackground = hard > 0 ? 'bg-red-700' : 'bg-transparent'

  const hardModeButtonClick = () => {
    dispatch(turnHardmode())
  }

  return (
    <button
      type="button"
      className={`absolute bottom-14 left-auto transition duration-300 ease-in-out border-8 border-red-700 ${hardButtonBackground} text-black font-bold py-1.5 w-48 mr-1 rounded`}
      onClick={() => hardModeButtonClick()}
    >
      Hardmode <span>{hard > 0 ? 'ON' : 'OFF'}</span>
    </button>
  )
}

export default HardmodeButton
