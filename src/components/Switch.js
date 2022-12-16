import { View, Text, StyleSheet, Dimensions } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import React from 'react';
import { useState } from 'react';
import LostItems from './Items/LostItems';
import FoundItems from './Items/FoundItems';

const Switch = () => {
  const moder = [{ label: 'হারানো জিনিস' }, { label: 'পাওয়া জিনিস' }];
  const [found, setFound] = useState(false);
  return (
    <View>
      <View style={styles.mode}>
        <SwitchSelector
          borderRadius={0}
          borderWidth={0}
          options={moder}
          initial={0}
          textColor={'black'}
          selectedColor={'black'}
          buttonColor={'#f3f3f3'}
          onPress={() => setFound(prev => !prev)}
        />
      </View >
      {found ? <FoundItems /> : <LostItems />}
    </View>
  );
};

const Devicewidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  mode: {

    width: Devicewidth - 10,
  },
});

export default Switch;
