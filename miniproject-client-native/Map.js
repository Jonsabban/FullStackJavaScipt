import React from 'react';
import { Text, View } from 'react-native';
import { MapView } from 'expo';

export default class Map extends React.Component {
    constructor() {
        super();
        this.state = {
            MapData: '',
            region: {
                latitude: 55.7704186,
                latitudeDelta: 0.0522,
                longitude: 12.5117948,
                longitudeDelta: 0.0421,
            },
            Markers: []
        }
    }

    componentWillMount() {
        const { navigation } = this.props;
        let mapData = navigation.getParam('data', 'NO_DATA');
        console.log("in Map: " + mapData);
        this.setState({MapData: mapData})
    }

    onRegionChange = region => {
        console.log(region)
        this.setState({ region })
    }

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', height: 400 }}>
                    <MapView
                        style={{ flex: 1 }}
                        initialRegion={this.state.region}
                        onRegionChange={this.onRegionChange}
                    >
                        {this.state.Markers.map(marker => (
                            <MapView.Marker
                                coordinate={marker.LatLng}
                                title={marker.title}
                                description={marker.description}
                                key={marker.LatLng}
                            />
                        ))}
                    </MapView>
                </View>
                <View>
                    <Text>
                        {this.state.region.latitude}
                        {this.state.region.longitude}
                    </Text>
                </View>
            </View>
        )
    }
}