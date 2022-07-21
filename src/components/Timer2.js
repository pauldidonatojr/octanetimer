import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
const Countdown = () => {
  const [countdownDate, setCountdownDate] = useState(
    new Date('10/22/2022').getTime()
  )
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    setInterval(() => setNewTime(), 1000)
  }, [])

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime()

      const distanceToDate = countdownDate - currentTime

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      )
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000)

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9]

      days = `${days}`
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`
      }

      setState({ days: days, hours: hours, minutes, seconds })
    }
  }

  return (
    <Wrapper>
      <header className="header">
        <h1 className="title">Coming To Your Nearest Chain</h1>
      </header>

      <div className="countdown-wrapper">
        <div className="time-section">
          <div className="time">{state.days || '0'}</div>
          <small className="time-text">Days</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.hours || '00'}</div>
          <small className="time-text">Hours</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
        </div>
        <div className="time-section">
          <div className="time">:</div>
        </div>
        <div className="time-section">
          <div className="time">{state.seconds || '00'}</div>
          <small className="time-text">Seconds</small>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0;
  display: grid;
  justify-content: center;
  height: 100vh;
  text-align: center;
  color: #333;
  .header {
    background: #254864;
    color: white;
    width: 80vw;
    height: 5rem;
    padding: 2.5rem;
    margin-top: 4rem;
    transition: width 2s, height 2s, background-color 2s, transform 2s;
    border-style: solid;
    border-width: 1px;
    display: block;
  }
  /* .header:hover {
    background-color: #63d2ff;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
  } */

  .title {
    margin: 0;
    font-family: 'Roboto';
  }
  /* .title:hover {
    background-color: #63d2ff;
    width: 200px;
    height: 200px;
    transform: rotate(180deg);
    font-size: 3rem;
  } */
  .subtitle {
    max-width: 576px;
    margin: 36px auto;
    letter-spacing: 0.1em;
    line-height: 1.3em;
  }

  .countdown-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 -8px 0 -8px;
    margin-bottom: 9rem;
  }

  .time-section {
    padding: 0px 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: #254864 !important;
  }

  .time {
    margin: 0;
    font-size: 40px !important;
    font-weight: 800 !important;
  }

  .small {
    font-size: 18px !important;
  }
`
export default Countdown
