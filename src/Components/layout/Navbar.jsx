import { Link } from 'react-router-dom';
import './Navbar.css'

//! LIGHT & DARK THEME!!
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar