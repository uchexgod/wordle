import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Podium from './icons/Podium';
import Settings from './icons/Settings';
import Help from './icons/Help';
import BackSpace from './icons/BackSpace';

const {width} = Dimensions.get('window');

const X = Array.from(Array(6).keys());
const Y = Array.from(Array(5).keys());

const keyFirstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
const keySecondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
const keyThirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

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

        <View style={styles.keyboard}>
          <View style={styles.keyboardRow}>
            {keyFirstRow.map(key => (
              <Pressable key={key} style={styles.keyboardBtn}>
                <Text style={styles.keyboardText}>{key}</Text>
              </Pressable>
            ))}
          </View>
          <View style={styles.keyboardRow}>
            {keySecondRow.map(key => (
              <Pressable key={key} style={styles.keyboardBtn}>
                <Text style={styles.keyboardText}>{key}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.keyboardRow}>
            <Pressable style={[styles.keyboardBtn, styles.specialKey]}>
              <Text style={styles.enterKey}>ENTER</Text>
            </Pressable>
            {keyThirdRow.map(key => (
              <Pressable key={key} style={styles.keyboardBtn}>
                <Text style={styles.keyboardText}>{key}</Text>
              </Pressable>
            ))}
            <Pressable style={[styles.keyboardBtn, styles.specialKey]}>
              <BackSpace color="#fff" width={20} height={20} />
            </Pressable>
          </View>
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
    fontSize: 18,
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
