import PropTypes from 'prop-types'


const MainLayout = ({
    component: Component,
    componentProps
}) => {
    return (
        <div className="container">
            <div className="background-element">
            </div>
            <div className="highlight-window">
                <div className='highlight-overlay'></div>
            </div>
            <div className="window">
                {Component &&
                    <Component {...componentProps} />
                }
            </div>
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
