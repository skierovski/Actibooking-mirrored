import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

const API_KEY = "AIzaSyDQ9EHZ_AwyqZYa3AqFiAXns05J8bjnObc";
Geocode.setApiKey(API_KEY);

class Map extends Component {
  state = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 13,
    searchLocation: this.props.address.address,
  };

  componentDidMount() {
    console.log(this.state.searchLocation);
    Geocode.fromAddress(this.props.address.address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          center: { lat, lng },
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div style={{ height: "70vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          center={this.state.center}
          zoom={this.state.zoom}
        >
          <Marker lat={this.state.center.lat} lng={this.state.center.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

const Marker = () => <div style={{ color: "red", fontSize: "30px" }}>📍</div>;

export default Map;
