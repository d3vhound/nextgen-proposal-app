import { compose, withProps, withStateHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
const MapStyles = require("./MapStyles.json");

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDCu7c0N2z8MrRcG-Q83tv21xz4EsgqpMc&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    })
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <React.Fragment>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 33.591, lng: -101.899 }}
    defaultOptions={{ styles: MapStyles }}
  >
    {
      props.isMarkerShown && 
      <Marker 
        position={{ lat: 33.591, lng: -101.899 }} 
        onClick={props.onToggleOpen}
      /> 
    }

  </GoogleMap>
  </React.Fragment>
)

export default MyMapComponent