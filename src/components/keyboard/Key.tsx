import {Text, StyleSheet, Pressable, Dimensions} from 'react-native';
import React from 'react';
import {validChar} from '../../types';

const {width} = Dimensions.get('window');

type Props = {
  value: validChar;
  onPress: (pressed: validChar) => void;
  children?: React.ReactNode;
};

const Key = ({value, onPress, children}: Props) => {
  return (
    <Pressable style={styles.button} onPress={() => onPress(value)}>
      {children || <Text style={styles.btnText}>{value}</Text>}
    </Pressable>
  );
};

export default Key;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 2,
    minWidth: width / 10 - 5,
    backgroundColor: '#3a3a3c',
    height: 50,
    borderWidth: 1,
    borderColor: '#3a3a3c',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});
