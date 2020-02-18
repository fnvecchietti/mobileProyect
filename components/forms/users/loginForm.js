import React, { useState } from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Input, Button, Avatar, Header } from "react-native-elements";

export const LoginForm = ({ props, setLoggin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSingIn = async (username, password) => {
    setLoggin(true);
    await props.firebase
      .loginWithEmail(username, password)
      .then(result => {
        props.navigation.navigate("ProductList");
      })
      .catch(err => {
        alert(err);
        setLoggin(false);
      });
  };
  return (
    <KeyboardAvoidingView behavior="padding" enabled>
      <Avatar
        rounded
        icon={{name: 'home'}}
        size="xlarge"
        containerStyle={{ alignSelf: "center", marginBottom: 30 }}
      />
      <Input
        placeholder="usuario"
        leftIcon={{
          type: "font-awesome",
          name: "envelope",
          size: 20,
          marginRight: 10
        }}
        onChange={change => setUsername(change.nativeEvent.text)}
        value={username}
      />
      <Input
        placeholder="contraseña"
        leftIcon={{
          type: "font-awesome",
          name: "lock",
          size: 30,
          marginRight: 10
        }}
        onChange={change => setPassword(change.nativeEvent.text)}
        value={password}
      />
      <Button
        title="Ingresar"
        type="clear"
        onPress={() => handleSingIn(username, password)}
      />
    </KeyboardAvoidingView>
  );
};
