import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'


const MapComponent = class extends Component {
  render() {
    return(
      <section style={{display: "flex"}}>
        <GoogleMapLoader
          containerElement={
            <div
              style={{
                height: '500px',
                width: '500px'
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => console.log(map)}
              defaultZoom={14}
              defaultCenter={{ lat: this.props.eventCoords.lat, lng: this.props.eventCoords.lon }}
            >
            <Marker
                position={{ lat: this.props.restCoords.latitude, lng: this.props.restCoords.longitude }}
                key='marker1'
                label='1'
                icon='http://maps.google.com/mapfiles/ms/icons/red.png'/>


            <Marker
                position={{ lat: this.props.eventCoords.lat , lng: this.props.eventCoords.lon }}
                key='marker2'
                label='2'
                icon='http://maps.google.com/mapfiles/ms/icons/green.png'/>
                <Marker
                    position={{ lat: this.props.barCoords.latitude, lng: this.props.barCoords.longitude }}
                    key='marker3'
                    label='3'
                    icon='http://maps.google.com/mapfiles/ms/icons/blue.png'/>
          </GoogleMap>
          }
        />
      </section>
    )
  }
}


export default MapComponent;
