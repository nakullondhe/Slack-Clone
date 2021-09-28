import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

const Provider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export default Provider;

export const useProvider = () => useContext(StateContext);
