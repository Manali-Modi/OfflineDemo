import { View, Text, SafeAreaView, Platform, Image } from 'react-native';
import React, { useState } from 'react';
import { styles } from './AuthScreen.styles';
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function LoginScreen(props: any) {
  const [mail, setMail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onMailChange = (value: string) => {
    setMail(value);
  }
  const onPasswordChange = (value: string) => {
    setPassword(value);
  }
  const onLoginPress = () => {
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
        <Text style={styles.lableTxt}>Don't have account ? Click here</Text>
      </View>
    </SafeAreaView>
  );
}