import { Link } from 'react-router-dom';
import { useContextGlobal } from '../utils/global.context';

const Navbar = () => {
  const { darkTheme, setDarkTheme } = useContextGlobal();

  function changeTheme() {
    setDarkTheme(!darkTheme)
    console.log("Dark theme status:", !darkTheme)

    const htmlElement = document.querySelector('html')
    htmlElement.classList.toggle('dark-theme')
    htmlElement.classList.toggle('light-theme')
  }

  return (
    <nav className='navbar'>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favs</Link>
      <button onClick={changeTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar