import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
      <div className="spindiv">
        <img
          src=" https://res.cloudinary.com/elpawl-llc/image/upload/v1658531311/octane_logo_qp5mh6.png
"
          className="logo1"
          alt="elpawl"
        />{' '}
        <img
          src="https://res.cloudinary.com/elpawl-llc/image/upload/v1658531377/octane7_pjddh7.png

"
          className="logo2"
          alt="elpawl"
        />
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  background-color: #000000;
  height: 100vh;
  .spindiv {
    display: grid;
    align-items: center;
    justify-content: center;
    padding: 6rem;
  }
  .logo1 {
    margin-bottom: 8rem;
    width: 325px;
    height: 275px;
  }
  .logo2 {
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    width: 250px;
    height: 150px;
    margin-left: 2rem;
  }
  /* h1 {
    font-family: ‘Arial Narrow’, sans-serif;
    font-weight: 100;
    font-size: 3.1rem;
    color: #a3e1f0;

    background-color: #0cb1c4;
  } */

  span {
    position: relative;
    top: 0.63em;
    display: inline-block;
    text-transform: uppercase;
    opacity: 0;
    transform: rotateX(-90deg);
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
export default Loading
