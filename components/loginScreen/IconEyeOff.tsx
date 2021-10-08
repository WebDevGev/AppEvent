import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconEyeOffProps {
  name: any;
  style: {};
  onPress: ()=> void
}
const IconEyeOff: React.FC<IconEyeOffProps> = ({
  name,
  style,
  onPress
}) => {
  
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Ionicons name={name} size={28} color="grey" />
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
export default IconEyeOff;