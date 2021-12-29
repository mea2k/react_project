import PropTypes from 'prop-types'

const ColorForm = ({ colorHEX, result, handleGetResult }) => {

    function handleCheck(e) {
        if (e.value[0] !== '#')
            e.value = '#' + e.value;
            handleGetResult(e.value);
    }

    return (
        <form className="color-form">
            <input type="text" name="colorHEX" maxLength={7} value={colorHEX} onChange={(e) => handleCheck(e.currentTarget)} className="color-input" />
            <div className="color-box" >
                <span>{result}</span>
            </div>
            </form>
    )
};


ColorForm.propTypes = {
    colorHEX: PropTypes.string,
    result: PropTypes.string,
    handleGetResult: PropTypes.func.isRequired
};

ColorForm.defaultProps = {
    result: '&nbsp;'
};


export default ColorForm;