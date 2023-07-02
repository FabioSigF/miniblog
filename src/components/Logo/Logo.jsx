import React from 'react'

import { Wrapper } from './Logo.styles'
import logo from '../../imgs/logo/logo.png'
export default function Logo() {
  return (
    <Wrapper>
      <img src={logo} alt="WanderLand Travel Blog" />
    </Wrapper>
  )
}
