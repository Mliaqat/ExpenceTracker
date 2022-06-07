import React, { createContext, useReducer } from "react";
import TransactionReducer from "./TransReducer";

let initailTraction = [
  { amount: 500, desc: "cash" },
  { amount: -400, desc: "BooK" },
  { amount: 600, desc: "Loan" },
];

export const TransactionContext = createContext(initailTraction);

export const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(TransactionReducer, initailTraction);

  function addtranstion(transobj) {
    dispatch({
      type: "Add",
      payload: transobj
      
    });
  }

  return(
      <TransactionContext.Provider value={{
        transaction:state,
        addtranstion
      }
          
      }>
  {children}
      </TransactionContext.Provider>
      
  )

};
