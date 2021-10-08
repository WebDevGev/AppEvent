import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  style: {};
  secureTextEntry: boolean;
}

const Input: React.FC<InputProps> = ({ style, ...props }) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={[style, styles.input]}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#E5E5E5',
    padding: 20,
    borderRadius: 8,
  },
});

export default Input;
