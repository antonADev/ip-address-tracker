import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';

import { useSelector } from 'react-redux';

const MapComponent = () => {
  const ipLocationState = useSelector((state) => state.ipData);

  const { lat, lng } = ipLocationState.ipData.location;
  console.log(ipLocationState);
  return (
    <MapContainer
      key={JSON.stringify(lat, lng)}
      center={[lat, lng]}
      zoom={12}
      scrollWheelZoom={false}
      zoomControl={false}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
};

export default MapComponent;
