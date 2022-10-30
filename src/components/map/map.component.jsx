import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import { useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

import { MapUiContainer } from './map.styles';
import { colors } from '../../utilities/style';
const MapComponent = () => {
  const { status, data } = useSelector((state) => state.ipData);

  return (
    <MapUiContainer>
      {status === 'loading' ? <FadeLoader color={colors.darkGrey} /> : null}
      {status === 'idle' && data ? (
        <MapContainer
          key={JSON.stringify(data.location.lat, data.location.lng)}
          center={[data.location.lat, data.location.lng]}
          zoom={12}
          scrollWheelZoom={false}
          zoomControl={false}
          dragging={false}>
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[data.location.lat, data.location.lng]} />
        </MapContainer>
      ) : null}
    </MapUiContainer>
  );
};

export default MapComponent;
