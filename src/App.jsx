//https://github.com/visgl/react-map-gl/tree/7.1-release
import React, {useState} from 'react';
import Map, {Marker} from 'react-map-gl';
//import * as parkData from "./data/skateboard-parks.json";
import police from './data/police.json'; // Import the entire JSON file
import hospital from './data/hospital.json';
import fire from './data/firestation.json';
import 'mapbox-gl/dist/mapbox-gl.css';
const MAPBOX_TOKEN = process.env.REACT_APP_TOKEN; // Set your mapbox token here

function App() {
const [viewport, setViewport] = useState({
  latitude: 43.9812096,
  longitude: -79.4820608,        
  zoom: 10
});
  return (
  <div style={{ width:"100vw", height:"100vh"}}>
  <Map 
  {...viewport}
  mapboxAccessToken={MAPBOX_TOKEN}
  mapStyle="mapbox://styles/projectviz/clqsgazh900lj01pi2ethf6uf"
  //mapStyle="mapbox://styles/projectviz/clqsurowf00m601pd7ddk7qxq"
  //https://visgl.github.io/react-map-gl/docs/get-started/state-management
  onMove={evt => setViewport(evt.viewport)}
  >
  {police.features.map((place) =>(
    <Marker 
    latitude={place.geometry.coordinates[0]}
    longitude={place.geometry.coordinates[1]}
    >
    <div className="marker">
      <img src="/police-station-svgrepo-com.svg" alt="police icon"/>

    </div>
    </Marker>
  ))}

    {hospital.features.map((place) =>(
    <Marker 
    latitude={place.geometry.coordinates[0]}
    longitude={place.geometry.coordinates[1]}
    >
    <div className="marker">
      <img src="/hospital-healthcare-and-medical-svgrepo-com.svg" alt="hospital icon"/>

    </div>
    </Marker>
    ))}

    {fire.features.map((place) =>(
    <Marker 
    latitude={place.geometry.coordinates[0]}
    longitude={place.geometry.coordinates[1]}
    >
    <div className="marker">
    <img src="/fire-station-svgrepo-com.svg" alt="hospital icon"/>
    </div>
    </Marker>
  ))}
  
  </Map>


  </div>
  );
}

export default App;



