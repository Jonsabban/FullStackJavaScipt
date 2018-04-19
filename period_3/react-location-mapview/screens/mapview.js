import React from 'react';
import { MapView, Location, Permissions } from 'expo';
import GPSStore from '../GPSStore';


const gps = new GPSStore();

export default class mapview extends React.Component {
    constructor() {
        super();
        this.getLocation = getLocation;

        this.state = {
            MyLocation: null,
            LatLng: null
        }
    }

    async componentDidMount() {
        await this.extractGPS();
        console.log(this.state.LatLng)

    }

    render() {
        return (
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 55.7704186,
                    latitudeDelta: 0.0522,
                    longitude: 12.5117948,
                    longitudeDelta: 0.0421,
                }}
            >
                <MapView.Marker
                    coordinate={this.state.LatLng}
                    //title={("my position")}
                >
                </MapView.Marker>
            </MapView>

        );
    }

    extractGPS = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
            return this.state.errorMessage;
        }
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ MyLocation: location });
        this.setState({ LatLng: { latitude: location.coords.latitude, longitude: location.coords.longitude } })
    }

}
function getLocation() {
    const location = gps._getLocationAsync();
    console.log(location.coords)
    return location;
}
