import {Map, Marker, ZoomControl} from "pigeon-maps";

export const MapComponent = (props) => {
  return (
    <Map
      styled={{height: "100%"}}
      defaultCenter={[props.lat, props.lng]}
      defaultZoom={15}
    >
      <ZoomControl />
      <Marker width={60} anchor={[props.lat, props.lng]} color="#000" />
    </Map>
  );
};
