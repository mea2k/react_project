import './main.css';

import MainLayout from './layouts/MainLayout';
import ShopItemFunc from './components/ShopItemFunc';
import ShopItemClass from './components/ShopItemClass';
import Calendar from './components/Calendar';
import HeaderLayout from './layouts/HeaderLayout';


const Hello = ({ name }) => {
    return (
        <h1>Welcome to React, {name}!!</h1>
    )
};

const ShopItemProps = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
}

const helloProps = { name: "user" };


const App = () => {
    const date = new Date();
    return (
        <>
            {/*<HeaderLayout component={Hello} componentProps={helloProps} /> */}
            <MainLayout component={ShopItemFunc} componentProps={ShopItemProps} />
            <MainLayout component={ShopItemClass} componentProps={ShopItemProps} />
            <Calendar date={date} />
        </>
    );
}





export default App;
