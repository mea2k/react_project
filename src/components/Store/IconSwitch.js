import PropTypes from 'prop-types'
import { ViewModes } from './const';


const IconSwitch = ({ icon, onSwitch }) => {

    return (
        <div className="items" onClick={(e) => onSwitch(e.currentTarget.textContent)} >
            {icon}
         </div>
    );
};


IconSwitch.propTypes = {
    icon: PropTypes.oneOf(ViewModes),
    onSwitch: PropTypes.func.isRequired
};

IconSwitch.defaultProps = {
    icon: 'view_list'
};



export default IconSwitch;