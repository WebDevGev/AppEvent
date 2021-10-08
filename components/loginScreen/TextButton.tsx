import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

interface TextButtonProps {
  title: string;
  style: {};
  onPress: () => void;
}
const TextButton: React.FC<TextButtonProps> = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};  

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
  },
  text: {
    color: '#141E61',
    fontWeight: '500',
    fontSize: 14,
  },
});
export default TextButton;
