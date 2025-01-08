import { NavLink } from 'react-router-dom'
const Menu = () => {
  return (
    <nav>
      <NavLink
        to="."
        className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
        end
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        style={({ isActive }) => (isActive ? { color: 'white' } : {})}
      >
        About
      </NavLink>
      <NavLink
        to="contacts"
        style={({ isActive }) => (isActive ? { color: 'white' } : {})}
      >
        Contacts
      </NavLink>
    </nav>
  )
}

export default Menu
