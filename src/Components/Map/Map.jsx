import React from "react";
//import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

import {config} from './Config'

export const MyMapComponent = compose(
  withProps({
    googleMapURL:config.MY_KEY,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
   withGoogleMap
)(props => <Map p={props} />);

class Map extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: -34.397,
      lng: 150.644,
    };
  }

  componentWillMount(){
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
      );
    } else {
      //  // No Support Web
      alert('El navegador no soporta la geolocalización,')
    }
  }

  render() {
    const { p } = this.props;
    const { lat, lng } = this.state;
    console.log(lat, lng)
    return (
      <div>
        <GoogleMap
          ref={map => {
            this.map = map;
            if (map && lat && lng) {
              const bounds = new window.google.maps.LatLngBounds({ lat, lng });
              console.log(bounds);
              //map.fitBounds(bounds);
              map.panTo({ lat, lng });
            }
          }}
          zoom={16}
          defaultCenter={{ lat, lng }}
        >
          {p.isMarkerShown && (
            <Marker position={{ lat, lng }} 
            />
          )}
        </GoogleMap>
        {lat} <br />
        {lng}
      </div>
    );
  }
}