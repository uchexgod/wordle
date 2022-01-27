import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

import Button from 'components/Button';
import {HelpIcon, PodiumIcon, SettingsIcon} from 'icons';
import {GameGrid} from 'components/grid';
import {Keyboard} from 'components/keyboard';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Button>
            <HelpIcon />
          </Button>

          <Text style={styles.title}>Wordle</Text>

          <View style={styles.menu}>
            <Button>
              <PodiumIcon />
            </Button>

            <Button>
              <SettingsIcon />
            </Button>
          </View>
        </View>

        <GameGrid />
        <Keyboard />
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

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
