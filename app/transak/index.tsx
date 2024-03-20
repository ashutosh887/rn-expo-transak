import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Transak = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Transak Demo</Text>
    </View>
  )
}

export default Transak

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
