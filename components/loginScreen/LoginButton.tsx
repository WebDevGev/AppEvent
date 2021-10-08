import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface LoginButtonProps {
  title: string;
  style: {};
  onPress: () => void;
}
const LoginButton: React.FC<LoginButtonProps> = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141E61',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});
export default LoginButton;
