import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Permissions, Location, Constants, MapView } from 'expo';
import { createStackNavigator } from 'react-navigation';
import Datastore from './DataStore';
const dataStore = new Datastore();

export default class App extends React.Component {
  constructor() {
    super();
    this.store = dataStore;
    this.state = {
      region: { latitude: 55.74409833281884, longitude: 12.475528623908758, latitudeDelta: 0.20227773847425823, longitudeDelta: 0.2851620689034462 },
      locationResult: null,
      location: { coords: { latitude: 0, longitude: 0 } },
      username: '',
      password: '',
      friends: [],
      currentFriend: '',
    };
  }

  componentDidMount() {
    this._getLocationAsync();
  }
  onRegionChange = region => {
    this.setState({ region });
    console.log(this.state.region);
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied', location,
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location), location, });
  };
  /* componentDidUpdate(prevProps, prevState) {
    if (prevState.friends != this.state.friends) {
      console.log(this.state.friends)
    }
  } */
  makeMarkers = () => {
    return this.state.friends.map((friend, f) => {
      let latLng = {
        latitude: friend.loc.coordinates[1],
        longitude: friend.loc.coordinates[0]
      }
      decs = `Lat: ${latLng.latitude}
        Lng: ${latLng.longitude}`;
      return (
        <MapView.Marker
          key={f}
          coordinate={latLng}
          title={friend._id}
          description={decs}
        />
      )
    })
  }
  submit = async () => {
    try {
      const username = this.state.username;
      const password = this.state.password;
      await this.store.login(username, password, (data) => {
        this.setState({ friends: data })
      });
    } catch (err) {
      console.log(err);
    };
  };

  render() {
    let decs = `Lat: ${this.state.location.coords.latitude}
    Lng: ${this.state.location.coords.longitude}`;
    return (

      <View style={{ flex: 1 }}>
        <View style={styles.statusBar} />
        <Text>Insert Username</Text>
        <TextInput
          style={{ height: 40, padding: 2 }}
          onChangeText={(username) => this.setState({ username })}
        />
        <Text>Insert Password</Text>
        <TextInput secureTextEntry={true} style={{ height: 40, padding: 2 }} onChangeText={(password) => this.setState({ password })} />
        <Touchable onPress={this.submit} title='Find friends' />

        <MapView
          style={{ flex: 1 }}
          initialRegion={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <MapView.Marker
            coordinate={this.state.location.coords}
            title="You"
            description={"You are here"}
          />
          {this.makeMarkers()}
        </MapView>
      </View>
    );
  }
}

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  }, statusBar: {
    backgroundColor: "#74b76f",
    height: Constants.statusBarHeight,
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})