import React, { useState, createContext, useContext } from "react";

export interface IUser {
  patient: any, 
  setPatient: Function,
}  

export const UserContext = React.createContext({} as IUser);  

export const UserContextProvider = (props: any) => {
  const [patient, setPatient] = useState({} as any);  

  return <UserContext.Provider value={{patient, setPatient}}>
  {
      props.children
  }</UserContext.Provider>;
};
