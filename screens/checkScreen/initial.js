
import React from 'react'
import { View, Text } from 'react-native'
import { withFirebaseHOC } from '../../configs/firebase'


  function Initial(props) {
    const CheckUser = async() =>{
        await props.firebase.checkUserAuth(user => {
            if (user) {
              // if the user has previously logged in
              props.navigation.navigate('Main')
            } else {
              // if the user has previously signed out from the app
              props.navigation.navigate('Login')
            }})
    }
    CheckUser()

    return <View><Text>Hola</Text></View>
}

  
  export default withFirebaseHOC(Initial)

 