import { useState } from "react";
import PropTypes from 'prop-types'

import { MenuItems } from "./const";

import './main.css';


const DropdownMenu = ({ items }) => {

    const [show, setShow] = useState(false);
    const [selectedItem, setSelectedItem] = useState('');

    return (
        <div className="menu-container">
            <div className={`dropdown-wrapper ${show ? 'open' : ''}`}>
                <button className="btn" onClick={() => setShow(!show)}>
                    <span>Account Settings</span>
                    <i className="material-icons">public</i>
                </button>
                <ul className="dropdown">
                    {items.map((v, key) => (
                        <li className={v.name === selectedItem ? 'active' : ''} key={`mnu_item_${v.id}`}>
                            <a href={v.href} onClick={(e) => setSelectedItem(e.currentTarget.textContent)}>{v.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
};


DropdownMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        href: PropTypes.string,
    }))
};

DropdownMenu.defaultProps = {
    items: MenuItems
};

export default DropdownMenu;