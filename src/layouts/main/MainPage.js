import { Routes, Route } from 'react-router-dom';
import Calendar from '../../components/Calendar';
import DropdownMenu from '../../components/DropdownMenu';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import ShopItem from '../../components/ShopItem';
import Store from '../../components/Store';


const MainPage = () => (
    <div className="main-window">
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/shop' element={<ShopItem />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/store' element={<Store />} />
            <Route path='/dropdown' element={<DropdownMenu />} />
        </Routes>
    </div>
);



export default MainPage;