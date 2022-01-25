import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Podium from './icons/Podium';
import Settings from './icons/Settings';
import Help from './icons/Help';

const X = Array.from(Array(6).keys());
const Y = Array.from(Array(5).keys());

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121213'}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Pressable style={styles.btn}>
            <Help color="#3a3a3c" />
          </Pressable>

          <Text style={styles.title}>Wordle</Text>

          <View style={styles.menu}>
            <Pressable style={styles.btn}>
              <Podium color="#3a3a3c" />
            </Pressable>

            <Pressable style={styles.btn}>
              <Settings color="#3a3a3c" />
            </Pressable>
          </View>
        </View>

        <View style={styles.grid}>
          {X.map(x => (
            <View key={x} style={styles.row}>
              {Y.map(y => (
                <View key={y} style={styles.cell}>
                  <Text>
                    {x}:{y}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121213',
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
