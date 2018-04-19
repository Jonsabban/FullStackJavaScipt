import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import LocationTest from './screens/locationTest';
import GPSTest from './GPSStore';
import mapview from './screens/mapview';


const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Holiday Homes' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
      <Text> Hello! This is a temp screen, press a button to actually see stuff </Text>

      <ScrollView>
      <Touchable onPress={() => navigate('Locations')} title="Location test" />
      <Touchable onPress={() => navigate('Map')} title="Map view" />
      <Touchable onPress={() => navigate('GPS')} title="GPS Test" />
      </ScrollView>
      </View>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  Locations: { screen: LocationTest },
  Map: { screen: mapview },
  GPS: {screen : GPSTest}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})