import React, { createContext, useState } from 'react';

export const TileContext = createContext();

export const TileProvider = ({ children }) => {
  const [hoveredTile, setHoveredTile] = useState(null);

  return (
    <TileContext.Provider value={{ hoveredTile, setHoveredTile }}>
      {children}
    </TileContext.Provider>
  );
};
