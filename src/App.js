import './App.css'
import React, { useState, useEffect } from 'react'
import { HomePage } from './pages'
import { Loading } from './components'
function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
      {loading === false ? (
        <div>
          <HomePage />
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default App
