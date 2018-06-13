import styled from 'styled-components';
import ReactMapboxGl, { Layer, Feature, Marker, Popup } from "react-mapbox-gl";
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';

import { Stops } from '../../../api/stops.js';
import { InterestPoints } from '../../../api/interestPoints.js';

const Mapbox = ReactMapboxGl({
  minZoom: 2,
  maxZoom: 15,
  accessToken: "pk.eyJ1IjoiamJjbG91YXJkIiwiYSI6IjE3YjFiNDM2OTA2OWVhZTI0MDgyY2Q4OTk1NDNiZTMwIn0.gSWvipB8f6mjKfXcBb4iwA"
});

const mapStyle = {
  flex: 1
};

// Define layout to use in Layer component
// For Icons : https://github.com/mapbox/mapbox-gl-styles/tree/master/sprites/basic-v9/_svg
const layoutLayer = { 'icon-image': 'town-hall-11', 'icon-size': 2, 'visibility' : 'visible'};
const layoutLayer2 = { 'icon-image': 'embassy-11', 'icon-size': 2, 'visibility' : 'visible'};
const image = new Image();
image.src = '../../../materials/678111-map-marker-512.png';
const images: any = ['myMarker', image];

const StyledPopup = styled.div`
  background: white;
  color: #3f618c;
  font-weight: 400;
  padding: 5px;
  border-radius: 2px;
`;

export interface State {
  fitBounds?: number[][];
  center: number[];
  zoom: [number];
  stop?: Stops;
  stops: Stops;
}

const flyToOptions = {
  speed: 0.6
};

export interface Props {
  // tslint:disable-next-line:no-any
  onStyleLoad?: (map: any) => any;
}


class MapCircuit extends Component {
  constructor(){
    super();
    this.state = {
      fitBounds: undefined,
      center: [10.921738, 43.548919],
      zoom: [8],
      stop: undefined,
      stops: {},
      selectStops: []
    }
  };

  onDrag = () => {
    if (this.state.stop) {
      this.setState({ stop: undefined });
    }
  };

  onToggleHover(cursor: string, { map }: { map: any }, stop: Stop) {
    map.getCanvas().style.cursor = cursor;
    this.setState({
      center: [stop.longitude, stop.latitude],
      zoom: [12],
      stop: stop
    });

  }

  markerClick = (stop: Stop, { feature }: { feature: any }) => {
    let sStops = this.state.selectStops
    // let sStops2 = sStops.push(stop)
    // console.log(sStops, sStops2)
    this.setState({
      center: [stop.longitude, stop.latitude],
      zoom: [12],
      stop: stop,
      selectStops: sStops
    });
  };

  onStyleLoad = (map: any) => {
    const { onStyleLoad } = this.props;
    return onStyleLoad && onStyleLoad(map);
  };


  render(){

    const { fitBounds, center, zoom, stops, stop } = this.state;

    return (
      <Mapbox
        fitBounds={fitBounds}
        center={center}
        zoom={zoom}
        onDrag={this.onDrag}
        containerStyle={mapStyle}
        flyToOptions={flyToOptions}
        style="mapbox://styles/mapbox/streets-v10"
        onStyleLoad={this.onStyleLoad}
        containerStyle={{
          width: "800px",
          height: "390px"
        }}>
          <Layer type="symbol" id="ips" layout={layoutLayer2} image={images}>
            {this.props.interestPoints.map((ip)=>{
            return(
              <Feature
                key={ip._id}
                coordinates={[ip.longitude, ip.latitude]}
              />
            )
            })}
          </Layer>
          <Layer type="symbol" id="stops" layout={layoutLayer} image={images}>
            {this.props.stops.map((stop)=>{
            return(
              <Feature
                key={stop._id}
                onMouseEnter={this.onToggleHover.bind(this, 'pointer', stop)}
                onMouseLeave={this.onToggleHover.bind(this, '', null)}
                onClick={this.markerClick.bind(this, stop)}
                coordinates={[stop.longitude, stop.latitude]}
              />
            )
            })}
          </Layer>
          {stop && (
            <Popup key={stop._id} coordinates={[stop.longitude, stop.latitude]}>
              <StyledPopup>
                <div>{stop.name}, in {stop.region}</div>
              </StyledPopup>
            </Popup>
          )}
      </Mapbox>
    )
  }
}

export default withTracker(()=>{
  Meteor.subscribe('allStops');
  Meteor.subscribe("allIPs")
    return {
      stops: Stops.find({}).fetch(),
      interestPoints: InterestPoints.find({}).fetch()
    };
})(MapCircuit);
