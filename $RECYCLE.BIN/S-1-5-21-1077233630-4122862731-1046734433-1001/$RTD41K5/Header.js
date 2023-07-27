// src/components/Header.js
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const selectedRegion = useSelector((state) => state.selectedRegion);

  return (
    <header>
      <div>Header</div>
      {selectedRegion && <div>Selected Region: {selectedRegion}</div>}
    </header>
  );
};

export default Header;
