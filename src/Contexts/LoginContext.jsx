import { createContext, useReducer } from "react";

export const context = createContext({
  isLogged: false,
});

const initialState = {
  isLogged: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = () => {
    dispatch({ type: "LOGIN" });
  };

  const value = {
    login: login,
  };

  return <context.Provider value={value}>{props.children}</context.Provider>;
};

export default ContextProvider;
