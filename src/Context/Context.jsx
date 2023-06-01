import { createContext, useReducer } from "react";
import { Reducer } from "../Reducers/Reducer";
import { InitState } from "./InitialStates";

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  // const [size, setSize] = useState(0);

  const [state, dispatch] = useReducer(Reducer, InitState);

  return (
    <Context.Provider
      value={[state, dispatch]}

      // size,
      // setSize,
      // product
    >
      {children}
    </Context.Provider>
  );
};
