import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
const Timer = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear()
    const difference = +new Date(`10/19/${year}`) - +new Date()

    let timeLeft = {}
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [year] = useState(new Date().getFullYear())
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })
  const timerComponents = []

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}
        {''}
      </span>
    )
  })

  return (
    <Wrapper>
      <div className="divtime1">
        <h2>Coming to your nearest chain</h2>
      </div>
      <div className="divtime2">
        <div className="time1">
          {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  background: hsla(248, 94%, 13%, 1);

  width: 115vh;
  height: 80vh;
  padding: 2rem;
  border-radius: 30%;
  .divtime1 {
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: #63d2ff;

    padding: 2rem;
  }
  .divtime2 {
    display: grid;
    justify-content: center;
    align-items: center;
    padding: 5rem;
    width: 20rem;
  }
  .time1 {
    display: grid;
    align-items: center;
    justify-content: center;
    font-size: 2.05rem;
    word-spacing: 20px;
    background-color: #5762d5;
    width: 435px;
    height: 235px;
  }
`
export default Timer
