import PropTypes from 'prop-types'
import MainMenu from './MainMenu';

import './main.css';

const HeaderLayout = () => (
    <div className="header-container">
        <div className="header-window">
            <MainMenu />
        </div>
    </div>
);

export default HeaderLayout;
