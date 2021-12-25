import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types'

import { Menus } from "./const";




const MainMenu = ({ menu }) => {

    const [location, setLocation] = useState(window.location.href.split('/').pop());

    return (
        <div>
            <div className="logo">
                <span className="text-red">МЕНЮ</span>
            </div>
            <nav className="navbar">
                <ul className="navbar-topmenu">
                    {menu.map((v) => (
                        <li className={v.submenu ? 'navbar-dropdown' : ''} key={v.location} >
                            <NavLink
                                to={v.link}
                                activeclassname="active"
                                onClick={() => setLocation(v.location)}
                                className={
                                    v.submenu && location && v.submenu.reduce((prev, cur) => prev + cur.location, '').includes(location) ?
                                        'active' :
                                        ''
                                }
                                style={{ left: Number(v.id) * 250 + 'px' }}
                            >
                                {v.name}
                            </NavLink>
                            {v.submenu ?
                                <ul className="navbar-submenu">
                                    {v.submenu.map((v2) => (
                                        <li key={v2.location} >
                                            <NavLink
                                                to={v2.link}
                                                activeclassname="active"
                                                onClick={() => setLocation(v2.location)}
                                            >
                                                {v2.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                                : ''}
                        </li>
                    ))}
                </ul>
            </nav>

        </div>

    )
};

MainMenu.propTypes = {
    menu: PropTypes.array
};

MainMenu.defaultProps = {
    menu: Menus
};



export default MainMenu;