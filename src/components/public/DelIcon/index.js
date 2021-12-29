import PropTypes from 'prop-types'

import '../main.css';

import img from './delIcon.png';

const DelIcon = ({ id, text, handleClick }) => (
    <img
        src={img}
        text={text}
        alt={text}
        title={text}
        onClick={() => { if (handleClick) return handleClick(id) }}
        key={`del_icon_${id}`}
        className='action-icon'
    />

)


DelIcon.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    handleClick: PropTypes.func,
    handleDel: PropTypes.func
};

DelIcon.defaultProps = {
    id: '',
    text: 'Удалить',
    handleClick: null
};


export default DelIcon;