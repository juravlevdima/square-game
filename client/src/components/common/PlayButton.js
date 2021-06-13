import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const PlayButton = () => {
  const dispatch = useDispatch()

  const playButtonBackground = 'bg-green-700 hover:bg-green-900 text-white'  // удалить
  // const playButtonBackground = 
  //   cols && rows
  //     ? 'bg-green-700 hover:bg-green-900 text-white'
  //     : 'bg-gray-300 text-gray-500 cursor-not-allowed'

  const playOnClick = () => {
    // dispatch(setGameStatus('start'))
    // dispatch(setGameResult(null))
    // dispatch(setCurrent(-1))
    // dispatch(setNewTime(1))
    // dispatch(setRating(0, 1))
    // history.push('/game')
  }

  return (
    <button
      type="button"
      className={`absolute bottom-2 left-auto transition duration-300 ease-in-out ${playButtonBackground} font-semibold py-2 w-48 mr-1 rounded`}
      onClick={playOnClick}
    // disabled={!(cols && rows)}
    >
      Play
    </button>
  )
}

export default PlayButton