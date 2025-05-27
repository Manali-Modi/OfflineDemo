import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { styles } from './AuthScreen.styles';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import auth from '@react-native-firebase/auth';

export default function LoginScreen(props: any) {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onMailChange = (value: string) => {
    setMail(value);
  }
  const onPasswordChange = (value: string) => {
    setPassword(value);
  }
  const onLoginPress = async () => {
    try {
      await auth().signInWithEmailAndPassword(mail, password);
      props.navigation.navigate("profile");
    } catch (error) {
      Alert.alert("Email or password is incorrect");
    }
  };
  const onSignupPress = () => {
    props.navigation.navigate("signup");
  }

  return (
    <SafeAreaView style={styles.container}>
      <CustomInput
        lable="E-mail"
        title="Please enter your email"
        value={mail}
        onChangeText={onMailChange}
      />

      <View style={styles.inputMargin}>
        <CustomInput
          lable="Password"
          title="Please enter your password"
          value={password}
          onChangeText={onPasswordChange}
        />
      </View>

      <View style={styles.loginBtn}>
        <CustomButton
          title="Login"
          onPress={onLoginPress}
        />
        <TouchableOpacity onPress={onSignupPress}>
          <Text style={styles.lableTxt}>Don't have account ? Click here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}