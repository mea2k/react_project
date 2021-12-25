import { Routes, Route } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import DropdownMenu from '../../components/DropdownMenu';
import Home from '../../components/Home';
import ListingLayout from '../../components/Listing';
import Portfolio from '../../components/Portfolio';
import ShopItem from '../../components/ShopItem';
import StarsLayout from '../../components/Stars';
import Store from '../../components/Store';


const MainPage = () => (
    <div className="main-window">
        <Routes>
            {/* Главная */}
            <Route exact path='/' element={<Home />} />
            {/* ДЗ1 - Компоненты */}
            <Route path='/shop' element={<ShopItem />} />
            <Route path='/calendar' element={<Calendar />} />
            {/* ДЗ2 - События и состояния */}
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/store' element={<Store />} />
            <Route path='/dropdown' element={<DropdownMenu />} />
            {/* ДЗ3 - Props */}
            <Route path='/stars' element={<StarsLayout />} />
            <Route path='/listing' element={<ListingLayout />} />
        </Routes>
    </div>
);



export default MainPage;