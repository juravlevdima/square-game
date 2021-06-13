import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const RatingPage = () => {
  const history = useHistory()
  const [ratingList, setRatingList] = useState([])

  useEffect(() => {
    axios.get('/api/v1/rating')
      .then(({ data }) => setRatingList(data))
      .catch(() => setRatingList([]))
  }, [])

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div className="relative flex flex-col overflow-hidden items-center w-96 h-96 bg-transparent text-black font-semibold text-lg rounded-lg border-4 border-purple-500 custom-shadow-style pt-4 px-10 font-mono">
          Rating
          {ratingList.map((it, idx) => {
            return (
              <div key={idx}>
                {idx + 1}.
                {it.name.length > 20 ? it.name.slice(0, 20) : it.name.padEnd(20, '.')}.
                {Math.trunc(it.rating * 100)}
              </div>
            )
          })}
        </div>
      </div>
      <div className="absolute top-4 left-2">
        <button
          className="transition duration-300 ease-in-out bg-purple-700 hover:bg-purple-900 text-white font-semibold py-2 w-20 mr-1 rounded"
          type="button"
          onClick={() => history.push('/')}
        >
          MENU
        </button>
      </div>
      <div className="absolute bottom-2 right-6 text-black text-lg font-semibold hidden md:block">
        Juravlev Dmitrii, 2021
      </div>
    </div>
  )
}

export default RatingPage
