/* eslint-disable prettier/prettier */
import { View, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/flatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

const App = () => {
  return (
    <SafeAreaView >
        <ScrollView>
        <View>
            {/* <Text>App</Text> */}
            <FlatCards />
            <ElevatedCards />
            <FancyCards />
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}



export default App