import { Link, NavLink } from "react-router-dom";

//import './main.css';

const MainMenu = () => (
    <div>
        <div className="logo">
            <span className="text-red">МЕНЮ</span>
        </div>
        <nav className="navbar">
            <ul>
                <li><NavLink to='/' activeclassname="active">Главная</NavLink></li>
                <li><NavLink to='/shop' activeclassname="active">ДЗ1.1 - Интернет-магазин</NavLink></li>
                <li><NavLink to='/calendar' activeclassname="active">ДЗ1.2* - календарь</NavLink></li>
                <li><NavLink to='/portfolio' activeclassname="active">ДЗ2.1 - фильтр</NavLink></li>
                <li><NavLink to='/store' activeclassname="active">ДЗ2.2 - Расположение товаров (Store)</NavLink></li>
           </ul>
        </nav>
    </div>
);


export default MainMenu;