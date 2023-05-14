import { NavLink } from "react-router-dom"
import "./style.css"
import { useState, useEffect } from "react"
import logotype from "../../img/projects/mrMurphy.png"


const Navbar = () => {
    const [, setSticky] = useState(false);
    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.screenY > 200)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });

    return (
    <nav className="nav">
        <div className="container">
            <div className="nav-row">
            <img className="logotype" src={logotype} alt="logo" ></img>
                <NavLink to="/" className="logo">
                    <strong>Mr. Murphy</strong>
                </NavLink>

                {/* <BtnDarkMode /> */}

                <ul className="nav-list">
                    <li className="nav-list__item">
                        <NavLink to="/" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/about" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            About Us
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/Works" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Works
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Contacts
                        </NavLink>
                    </li>
                    <li className="nav-list__item">
                        <NavLink to="/Order" className={({ isActive }) => isActive ? activeLink : normalLink}>
                            Order
                        </NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;