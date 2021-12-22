import PropTypes from 'prop-types'
import MainPage from './MainPage';

import './main.css';

const MainLayout = ({
    component: Component,
    componentProps
}) => {
    return (
        <div className="main-content">

            <MainPage />
            
        </div>);
};



MainLayout.propTypes = {
    component: PropTypes.element,
    componentProps:  PropTypes.any
};
MainLayout.defaultProps = {
    component: null,
    componentProps: null
};


export default MainLayout;
