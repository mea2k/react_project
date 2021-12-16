import PropTypes from 'prop-types'


const HeaderLayout = ({
    component: Component,
    componentProps
}) => {
    return (
        <div className="container">
            <div className="window">
                {Component &&
                    <Component {...componentProps} />
                }
            </div>
        </div>);
};



HeaderLayout.propTypes = {
    component: PropTypes.element,
    componentProps:  PropTypes.any
};
HeaderLayout.defaultProps = {
    component: null,
    componentProps: null
};


export default HeaderLayout;
