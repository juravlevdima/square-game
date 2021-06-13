import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Main = () => {

  const [test, setTest] = useState('loading...')
  useEffect(() => {
    axios.get('/api/v1/test')
      .then(({ data }) => setTest(JSON.stringify(data)))
      .catch(() => setTest('server error'))
  })

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-indigo-600 hover:text-red-500 active:bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <p>This is main page</p>
        <p>Server test: {test}</p>
      </div>
    </div>
  )
}

export default Main
