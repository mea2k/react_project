import PropTypes from 'prop-types'


const SelectStars = ({ handleSetStars }) => {

    function onChangeStarNumber(e) {
        if (!isNaN(e.currentTarget.value))
            handleSetStars(Number(e.currentTarget.value))
    }

    return (
        <div>
            <form className="stars">
                <label htmlFor="starNumber">Число звезд: </label>
                <input type="number" name="starNumber" onChange={onChangeStarNumber} />
            </form>
        </div>
    )
};



SelectStars.propTypes = {
    handleSetStars: PropTypes.func.isRequired
};


export default SelectStars;
