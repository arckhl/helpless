import React, { createContext, useCallback } from 'react';

export const HealthContext = createContext();

export const HealthProvider = ({ children }) => {
  const fetchHealthData = useCallback(async () => {
    // Ganti URL dengan API endpoint Anda
    const response = await fetch('https://api.example.com/health-data');
    const data = await response.json();
    return data;
  }, []);

  return (
    <HealthContext.Provider value={{ fetchHealthData }}>
      {children}
    </HealthContext.Provider>
  );
};
