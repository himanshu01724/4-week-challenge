import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [textareaData, setTextareaData] = useState("");

  return (
    <DataContext.Provider value={{ textareaData, setTextareaData }}>
      {children}
    </DataContext.Provider>
  );
};
