import React from 'react'
import { Timer } from '../components'
import styled from 'styled-components'
function HomePage() {
  return (
    <Wrapper>
      <Timer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: whitesmoke;


  padding: 2rem;
  display: grid;
  justify-content: center;
  align-items: center;
`

export default HomePage
