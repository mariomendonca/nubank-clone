import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '../../Components/Header'
import Tabs from '../../Components/Tabs'
import Menu from '../../Components/Menu'

import { Container, Content, Card, CardContent, CardFooter, CardHeader, Title, Description, Annotation } from './styles'

export default function Home() {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ], 
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY
      // console.log(translationY)
      // translateY.setOffset(offset) ele nao voltava pro pronto inicial
      // translateY.setValue(0)

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }  


      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-300, 0, 380],
                outputRange: [-50, 0, 380],
                extrapolate: 'clamp'
              }),
            }]
          }}>
            <CardHeader>
              <MaterialIcons name='attach-money' size={28} color='#666' />
              <MaterialIcons name='visibility-off' size={28} color='#666' />
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ 50.412,65</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebida hoje
            </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY}/>
    </Container>
  );
}
