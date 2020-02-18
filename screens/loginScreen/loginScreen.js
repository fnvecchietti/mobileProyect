import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Platform,
  View,
  ActivityIndicator,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';

import { loginScreenStyle } from '../../constants/styles/loginScreenStyles'

import { LoginForm } from '../../components/forms/users/loginForm';
import { withFirebaseHOC } from '../../configs/firebase';
import { Header } from 'react-native-elements';


function LoginScreen(props) {
  const [isLoggin, setLoggin] = useState(false)
  return (
    <View style={loginScreenStyle.container}>
      <Header centerComponent={{text: 'Progress App'}} containerStyle={{backgroundColor: '#3EC1D3'}}/>
     <KeyboardAvoidingView behavior="padding" enabled style={loginScreenStyle.content}>
     { isLoggin?  <ActivityIndicator/> : <LoginForm props={props} setLoggin={setLoggin}/>}
     </KeyboardAvoidingView>
    </View>
  );
}

export default withFirebaseHOC(LoginScreen)