import { SafeAreaView, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './AuthScreen.styles'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import auth from '@react-native-firebase/auth';

export default function ProfileScreen(props: any) {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPwd, setConfirmPwd] = useState<string>();

  const onMailChange = (value: string) => {
    setMail(value);
  }
  const onPasswordChange = (value: string) => {
    setPassword(value);
  }
  const onConfirmPwdChange = (value: string) => {
    setConfirmPwd(value);
  }
  const onSignupPress = async () => {
    console.log('User account');
    try {
      await auth().createUserWithEmailAndPassword(mail, password);
      props.navigation.navigate("profile")
    } catch (error) {
      Alert.alert("Email or password is invalid");
    }
  };
  const onLoginPress = () => {
    props.navigation.navigate("login")
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

      <View style={styles.inputMargin}>
        <CustomInput
          lable="Confirm Password"
          title="Please re-enter your password"
          value={confirmPwd}
          onChangeText={onConfirmPwdChange}
        />
      </View>

      <View style={styles.loginBtn}>
        <CustomButton
          title="Create Account"
          onPress={onSignupPress}
        />
        <TouchableOpacity onPress={onLoginPress}>
          <Text style={styles.lableTxt}>Have account ? Click here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
