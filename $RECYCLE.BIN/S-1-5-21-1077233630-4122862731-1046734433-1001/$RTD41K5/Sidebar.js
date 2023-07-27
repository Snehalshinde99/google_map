// src/components/Sidebar.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { selectRegion } from '../store/actions';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleRegionSelect = (region) => {
    dispatch(selectRegion(region));
  };

  return (
    <aside>
      <div>Sidebar</div>
      <button onClick={() => handleRegionSelect('United States')}>United States</button>
      <button onClick={() => handleRegionSelect('India')}>India</button>
      <button onClick={() => handleRegionSelect('United Kingdom')}>United Kingdom</button>
    </aside>
  );
};

export default Sidebar;
