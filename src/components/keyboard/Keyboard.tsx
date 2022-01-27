import {View, Text} from 'react-native';
import React from 'react';

const Keyboard = () => {
  return (
    <View>
      <Text>keyboard here</Text>

      {/* <View style={styles.keyboard}>
          <View style={styles.keyboardRow}>
            {keyFirstRow.map(key => (
              <Key key={key} onPress={() => {}} value="A" />
            ))}
          </View>
          <View style={styles.keyboardRow}>
            {keySecondRow.map(key => (
              <Key key={key} onPress={() => {}} />
            ))}
          </View>

          <View style={styles.keyboardRow}>
            <Pressable style={[styles.keyboardBtn, styles.specialKey]}>
              <Text style={styles.enterKey}>ENTER</Text>
            </Pressable>
            {keyThirdRow.map(key => (
              <Key key={key} onPress={() => {}} />
            ))}
            <Pressable style={[styles.keyboardBtn, styles.specialKey]}>
              <BackSpace color="#fff" width={20} height={20} />
            </Pressable>
          </View>
        </View> */}
    </View>
  );
};

export default Keyboard;
