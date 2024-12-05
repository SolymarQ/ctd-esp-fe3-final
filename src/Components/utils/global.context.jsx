import { createContext, useState, useEffect, useContext } from "react";
import axios from 'axios';

const ContextGlobal = createContext(undefined);

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const ContextProvider = ({children}) => {
  const [favs, setFavs] = useState(lsFavs);
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
      axios(url).then((res) => {
      console.log(res.data);
      setDentists(res.data);
      })
  }, []);
  useEffect(() => {
      localStorage.setItem("favs", JSON.stringify(favs))
  }, [favs]);
  return(
      <ContextGlobal.Provider value={{dentists, favs, setFavs}}>
          { children }
      </ContextGlobal.Provider>
  )
}
export default ContextProvider;

export const useDentistState = () => useContext(ContextGlobal);

export const initialState = {theme: "", data: []}
