import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import logo from '../../assets/Nubank_Logo.png'

import { Container, Top, Logo, Title } from './styles'

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} /> 
        <Title>Mário Mendonça</Title>
      </Top>
      <MaterialIcons name='keyboard-arrow-down' size={20} color='#fff'/>
    </Container>
  )
}