import PropTypes from 'prop-types'

import '../main.css';

import img from './editIcon.png';

const EditIcon = ({ id, text, handleClick }) => (
   <img
        src={img}
        text={text}
        alt={text}
        title={text}
        onClick={() => { if (handleClick) return handleClick(id) }}
        key={`edit_icon_${id}`}
        className='action-icon'
    />    
)


EditIcon.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    handleClick: PropTypes.func,
    handleDel: PropTypes.func
};

EditIcon.defaultProps = {
    id: '',
    text: 'Изменить',
    handleClick: null
};


export default EditIcon;