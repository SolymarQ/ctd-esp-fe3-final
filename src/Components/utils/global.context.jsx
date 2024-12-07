import { createContext, useEffect, useContext, useReducer } from "react";
import axios from 'axios';
import { reducer } from "../../reducers/reducer"

const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

const initialState = {
    dentists: [],
    favs: lsFavs,
    theme: "light"
}

export const ContextProvider = ({children}) => {
  const[state, dispatch] = useReducer(reducer, initialState);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs))
  }, [state.favs]);
  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);  
  useEffect(() => {
      axios(url).then((res) => {
      console.log("data",res.data);
      dispatch({type: "GET_DENTISTS", payload: res.data})
      })
  }, []);
  return(
      <ContextGlobal.Provider value={{state, dispatch}}>
          { children }
      </ContextGlobal.Provider>
  )
}
export default ContextProvider;

export const useDentistState = () => useContext(ContextGlobal);
