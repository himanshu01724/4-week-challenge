import React, { createContext, useContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [datasharing, setDataSharing] = useState('');
    
    return (
      <DataContext.Provider value={{ datasharing, setDataSharing }}>
        {children}
      </DataContext.Provider>
    );
  };