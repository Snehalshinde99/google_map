// src/components/FormInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadRegionInfo } from '../store/actions';

const FormInput = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const dispatch = useDispatch();

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
  };

  const handleLoadRegionInfo = () => {
    dispatch(loadRegionInfo(selectedRegion));
  };

  return (
    <div>
      <h2>Form Input</h2>
      <select value={selectedRegion} onChange={handleRegionChange}>
        <option value="">Select a region</option>
        <option value="United States">United States</option>
        <option value="India">India</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>
      <button onClick={handleLoadRegionInfo}>Load</button>
    </div>
  );
};

export default FormInput;
