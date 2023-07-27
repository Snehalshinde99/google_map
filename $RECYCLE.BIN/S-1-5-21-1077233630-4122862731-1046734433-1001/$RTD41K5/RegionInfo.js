// src/components/RegionInfo.js
import React from 'react';
import { useSelector } from 'react-redux';

const RegionInfo = () => {
  const regionInfo = useSelector((state) => state.regionInfo);

  return (
    <div>
      <h2>Region Info</h2>
      {regionInfo && (
        <div>
          <p>Currency Symbol: {regionInfo.currencySymbol}</p>
          <p>Units of Speed: {regionInfo.speedUnit}</p>
          <p>Units of Distance: {regionInfo.distanceUnit}</p>
          <p>Units of Volume: {regionInfo.volumeUnit}</p>
          <p>Timezone(s): {regionInfo.timezones.join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default RegionInfo;
