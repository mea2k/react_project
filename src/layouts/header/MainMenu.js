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
                <li><NavLink to='/shop' activeclassname="active">ДЗ 1.1 - Интернет-магазин</NavLink></li>
                <li><NavLink to='/calendar' activeclassname="active">ДЗ 1.2* - Календарь</NavLink></li>
                <li><NavLink to='/portfolio' activeclassname="active">ДЗ 2.1 - Фильтр (портфолио)</NavLink></li>
                <li><NavLink to='/store' activeclassname="active">ДЗ 2.2 - Расположение товаров (Store)</NavLink></li>
           </ul>
        </nav>
    </div>
);


export default MainMenu;