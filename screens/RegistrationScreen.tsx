import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Input from '../components/loginScreen/Input';
import LoginButton from '../components/loginScreen/LoginButton';
import ErrorText from '../components/loginScreen/ErrorText';
import IconCloseButton from '../components/loginScreen/IconCloseButton';
import IconEyeOff from '../components/loginScreen/IconEyeOff';


const RegistrationScreen: React.FC<any> = (props) => {
  const [passEye, setPassEye] = useState({
    icon: 'eye-off',
    secureTextEntry: true,
  });

  const [passConfirmEye, setPassConfirmEye] = useState({
    icon: 'eye-off',
    secureTextEntry: true,
  });

  return (
    <View style={styles.container}>
      <IconCloseButton
        style={styles.iconClose}
        name={'closecircle'}
        onPress={() => props.navigation.navigate('LoginScreen')}
      />
      <Text style={styles.title}>Register Now!</Text>
      <ErrorText title={''} />

      <Input
        secureTextEntry={false}
        placeholder={'Email'}
        style={styles.input}
      />

      <View style={styles.inputArea}>
        <Input
          secureTextEntry={passEye.secureTextEntry}
          placeholder={'Password'}
          style={styles.input}
        />
        <View style={styles.iconArea}>
          <IconEyeOff
            name={passEye.icon}
            style={styles}
            onPress={() =>
              setPassEye((prevState) => ({
                icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
                secureTextEntry: !prevState.secureTextEntry,
              }))
            }
          />
        </View>
      </View>

      <View style={styles.inputArea}>
        <Input
          secureTextEntry={passConfirmEye.secureTextEntry}
          placeholder={'Confirm Password'}
          style={styles.input}
        />
        <View style={styles.iconArea}>
          <IconEyeOff
            name={passConfirmEye.icon}
            style={styles}
            onPress={() =>
              setPassConfirmEye((prevState) => ({
                icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
                secureTextEntry: !prevState.secureTextEntry,
              }))
            }
          />
        </View>
      </View>

      <LoginButton
        title={'Sign Up'}
        style={styles.loginButton}
        onPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 120,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#0F044C',
    alignItems: 'center',
    marginBottom: 30,
  },
  input: {
    marginVertical: 8,
  },
  loginButton: {
    marginVertical: 20,
  },
  iconClose: {
    position: 'absolute',
    top: 20,
    left: 170,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArea: {
    position: 'absolute',
    zIndex: 1,
    left: 270,
  },
});

export default RegistrationScreen;
