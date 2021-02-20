import React from 'react'
import QRcode from 'react-native-qrcode-svg'
import { MaterialIcons } from '@expo/vector-icons'

import { Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

export default function Menu({ translateY }) {
  
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}>
      <Code>
        <QRcode 
          value='https://github.com/mariomendonca'
          size={80}
          backgroundColor='#fff'
          color='#8b10ae'
      />
      </Code>
      <Nav>
        <NavItem>
          <MaterialIcons name='help-outline' size={20} color='#fff'/>
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='person-outline' size={20} color='#fff'/>
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='credit-card' size={20} color='#fff'/>
          <NavText>Configurar Cartão</NavText>
        </NavItem>
        <NavItem>
          <MaterialIcons name='smartphone' size={20} color='#fff'/>
          <NavText>App</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>
          Sair do app
        </SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}