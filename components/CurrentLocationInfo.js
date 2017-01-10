export let __hotReload = true;

import React from 'react';

export default class CurrentLocationInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 'unknown',
      lon: 'unknown'
    };
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition( position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.setState({lat,lon});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render() {
    return (
      <div>
        Current Location: <b>lat</b>={this.state.lat}, <b>lon</b>={this.state.lon}
      </div>
    );
  }
}