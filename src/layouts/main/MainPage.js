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
            {/* ������� */}
            <Route exact path='/' element={<Home />} />
            {/* ��1 - ���������� */}
            <Route path='/shop' element={<ShopItem />} />
            <Route path='/calendar' element={<Calendar />} />
            {/* ��2 - ������� � ��������� */}
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/store' element={<Store />} />
            <Route path='/dropdown' element={<DropdownMenu />} />
            {/* ��3 - Props */}
            <Route path='/stars' element={<StarsLayout />} />
            <Route path='/listing' element={<ListingLayout />} />
        </Routes>
    </div>
);



export default MainPage;