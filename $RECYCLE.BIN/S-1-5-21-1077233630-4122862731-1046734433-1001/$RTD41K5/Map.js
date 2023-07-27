// src/components/Map.js
import React from 'react';
import { MapContainer, TileLayer } from '@react-leaflet/core';

const Map = () => {
  return (
    <div>
      <h2>Map</h2>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </div>
  );
};

export default Map;
