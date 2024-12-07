import { Link } from 'react-router-dom'
import { useDentistState } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, dispatch } = useDentistState();

  const toggleTheme = () => {
    dispatch({ type: "TOOGLE_THEME" });
  };

  return (
    <nav className={state.theme}>
      <div>
        <img src="/DH.ico" alt="Icono de digital House" />
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme} className={`theme-button ${state.theme === 'dark' ? 'dark' : 'light'}`} >{state.theme === "dark" ? "☀️" : "🌙"}</button>
      </div>
    </nav>
  )
}

export default Navbar