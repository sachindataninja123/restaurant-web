import React, { createContext, useState } from "react";

export const dataContext = createContext();

const UserContext = ({ children }) => {
  let [showCart, setShowCart] = useState(false);

  let data = {
    showCart,
    setShowCart
  };

  return (
    <div>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>{" "}
    </div>
  );
};

export default UserContext;
