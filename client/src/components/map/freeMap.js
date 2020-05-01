import React, { Component } from 'react'
import ReactMapGL, {NavigationControl, Marker} from 'react-map-gl'
import Pin from './pin.png'
import './freeMap.css'

const token = process.env.REACT_APP_TOKEN;

export class freeMap extends Component {
    

    state = {
        viewport: {
            width: "100%",
            height: 500,
            latitude: 60.499545,
            longtitude: 22.294462,
            zoom: 12
        }
    };

    



    render() {
        return (
            <div className="mapWrapper">
            <ReactMapGL className="map"
            latitude={60.499545}
            longitude={22.294462}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={token}
            mapStyle={'mapbox://styles/mapbox/streets-v11'}

            
            >
            <Marker latitude={60.499545} longitude={22.294462} offsetLeft={-20} offsetTop={-20}>
                <img className="pin" src={Pin} alt="cannot display"/>
                
            </Marker>

            <div style={{position: 'absolute', right: 0}}>
                <NavigationControl />

            </div>
            </ReactMapGL>
                
            </div>
        );
    }
}

export default freeMap
