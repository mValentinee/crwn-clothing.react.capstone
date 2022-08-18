import { createContext, useState } from "react";
///////////////////////////////////

export const CheckOutContext = createContext({
  isCheckOutPageOpen: false,
  setCheckOutToOpen: () => {},
});

export const CheckOutProvider = ({ children }) => {
  const [isCheckOutPageOpen, setCheckOutToOpen] = useState(false);

  const value = { isCheckOutPageOpen, setCheckOutToOpen };

  return (
    <CheckOutContext.Provider value={value}>
      {children}
    </CheckOutContext.Provider>
  );
};
