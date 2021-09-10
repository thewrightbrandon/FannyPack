import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates }) => {

  const classes = useStyles()
  const onMobile = useMediaQuery('(min-width:600px)')

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={12}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(event) => {
          console.log(event);
          setCoordinates({
            lat: event.center.lat,
            lng: event.center.lng
          })
          setBounds({
            ne: event.marginBounds.ne,
            sw: event.marginBounds.sw
          })
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  )
}

export default Map
