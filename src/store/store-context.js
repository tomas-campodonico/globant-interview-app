import React from 'react';

export const StoreContext = React.createContext();

export function useStoreContext() {
  return React.useContext(StoreContext);
}
