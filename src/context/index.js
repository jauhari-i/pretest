import React, { createContext, useState } from 'react';

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [openCart, setOpenCart] = useState(true);
  const [openDetail, setOpenDetail] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const appValue = {
    openCart,
    setOpenCart,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
}
