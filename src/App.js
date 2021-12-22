﻿
import MainLayout from './layouts/main/MainLayout';
import HeaderLayout from './layouts/header/HeaderLayout';

import './main.css';

const App = () => {
    const date = new Date();
    return (
        <div>
            <HeaderLayout />
            <MainLayout />
        </div>
    );
}





export default App;
