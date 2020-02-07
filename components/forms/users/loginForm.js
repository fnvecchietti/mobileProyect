import React from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { Input } from 'react-native-elements'


export const loginForm = () => {


    return(<KeyboardAvoidingView behavior="padding" enabled>
        <Input/>       
        <Input/>   
    </KeyboardAvoidingView>)
}
