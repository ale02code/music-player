import { createContext, useState } from "react";

export const FetchingDataContext = createContext();

export const FetchingDataContextProvider = ({ children }) => {
  const [fetching, setFetching] = useState([]);

  return (
    <FetchingDataContext.Provider value={{ fetching, setFetching }}>
      {children}
    </FetchingDataContext.Provider>
  );
};
