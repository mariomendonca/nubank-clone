import React from 'react'
import Home from './src/Screens/Home'
import {StatusBar} from 'react-native'

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor='#8B10AA'/>  
      {/* so muda no android */}
      <Home />
    </>  
  )
}