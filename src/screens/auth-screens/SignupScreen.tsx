import { SafeAreaView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './AuthScreen.styles'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

export default function ProfileScreen() {
  const [mail, setMail] = useState<string>();
  const [password, setPassword] = useState<string>();
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
  const onSignupPress = () => {
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
          title="Login"
          onPress={onSignupPress}
        />
        <Text style={styles.lableTxt}>Have account ? Click here</Text>
      </View>
    </SafeAreaView>
  )
}
