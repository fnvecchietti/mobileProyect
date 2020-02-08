import React, { useState } from 'react'
import { View, KeyboardAvoidingView } from 'react-native'
import { Input, Button, Image, Avatar } from 'react-native-elements'


export const LoginForm = ({props, setLoggin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<KeyboardAvoidingView behavior="padding" enabled>
        <Avatar rounded title="CV" size="xlarge" containerStyle={{alignSelf: 'center'}}/>
        <Input placeholder="usuario" leftIcon={{ type: 'font-awesome', name: 'envelope', size: 20, marginRight: 10 }} onChange={change => setUsername(change.nativeEvent.text)} value={username}/>
        <Input placeholder="contraseña" leftIcon={{ type: 'font-awesome', name: 'lock', size: 30, marginRight: 10 }} onChange={change => setPassword(change.nativeEvent.text)} value={password}/>
        <Button title="Ingresar" type="clear" onPress={()=> {
            setLoggin(true)
            setTimeout(()=>{
                setLoggin(false);
                props.navigation.navigate('Main')
            },2000)
        }}/>
    </KeyboardAvoidingView>)
}