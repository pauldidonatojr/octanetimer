import React from 'react'
import { Timer, Timer2 } from '../components'
import styled from 'styled-components'
function HomePage() {
  return (
    <Wrapper>
      <Timer2 />
      {/* <Timer /> */}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: whitesmoke;

 
`

export default HomePage
