import {Pressable, StyleSheet, Dimensions} from 'react-native';
import React from 'react';

const {width} = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
};
const Button = ({children}: Props) => {
  return <Pressable style={styles.btn}>{children}</Pressable>;
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  specialKey: {
    flexGrow: 1,
  },
  enterKey: {
    color: '#fff',
  },
  keyboard: {
    width: width,
    maxWidth: 500,
    paddingHorizontal: 4,
  },
  padding: {
    height: 50,
    flexGrow: 1,
    marginHorizontal: 4,
  },
  keyboardBtn: {
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
  keyboardText: {
    color: '#fff',
    fontSize: 16,
  },
  grid: {
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 10,
    alignItems: 'center',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#3a3a3c',
  },
  menu: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    minWidth: 350,

    height: 70,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
  cell: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: '#3a3a3c',
  },
  btn: {
    width: 32,
    height: 32,
    marginLeft: 10,
  },
});
