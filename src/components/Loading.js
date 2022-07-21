import React from 'react'
import styled from 'styled-components'
const Loading = () => {
  return (
    <Wrapper>
      <h1>
        <span class="let1">e</span>
        <span class="let2">n</span>
        <span class="let3">t</span>
        <span class="let4">e</span>
        <span class="let5">r</span>
        <span class="let6">i</span>
        <span class="let1">n</span>
        <span class="let2">g</span>
        <br />
        <span class="let3">o</span>
        <span class="let4">c</span>
        <span class="let5">t</span>
        <span class="let3">a</span>
        <span class="let4">n</span>
        <span class="let5">e</span>
        {/* <span class="let7">g</span> */}
      </h1>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  h1 {
    margin: 0;
    padding: 0;
    font-family: ‘Arial Narrow’, sans-serif;
    font-weight: 100;
    font-size: 3.1rem;
    color: #a3e1f0;
  }

  span {
    position: relative;
    top: 0.63em;
    display: inline-block;
    text-transform: uppercase;
    opacity: 0;
    transform: rotateX(-90deg);
  }

  .let1 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.3s;
  }

  .let2 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.5s;
  }

  .let3 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.6s;
  }

  .let4 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.7s;
  }

  .let5 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.8s;
  }

  .let6 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 1.9s;
  }

  .let7 {
    animation: drop 1.2s ease-in-out infinite;
    animation-delay: 2.0s;
  }

  @keyframes drop {
    10% {
      opacity: 0.5;
    }
    20% {
      opacity: 1;
      top: 3.78em;
      transform: rotateX(-360deg);
    }
    80% {
      opacity: 1;
      top: 3.78em;
      transform: rotateX(-360deg);
    }
    90% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      top: 6.94em;
    }
  }

`
export default Loading
