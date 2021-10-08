import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface IconCloseButtonProps {
  name: any;
  style: {};
  onPress: () => void;
}
const IconCloseButton: React.FC<IconCloseButtonProps> = ({
  name,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <AntDesign name={name} size={33} color="#141E61" />
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
});
export default IconCloseButton;
