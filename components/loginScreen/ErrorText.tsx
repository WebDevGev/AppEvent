import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ErrorProps {
  title: string;
}

const ErrorText: React.FC<ErrorProps> = (props) => {
  return <Text style={styles.text}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ErrorText;
