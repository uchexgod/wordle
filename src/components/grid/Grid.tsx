import {View, Text} from 'react-native';
import React from 'react';

const Grid = () => {
  return (
    <View>
      <Text>game view</Text>
      {/* <View style={styles.grid}>
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
        </View> */}
    </View>
  );
};

export default Grid;
