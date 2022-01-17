import PropTypes from 'prop-types'

const TrainingForm = ({ date, distance, handleSubmit, handleChange }) => {


    function onChange(e) {
        handleChange({
            [e.currentTarget.getAttribute("name")]: e.currentTarget.value
        });
    }

    function handleClick(e) {
        e.preventDefault();
        const newDate = e.currentTarget.form.date.value;
        const newDistance = e.currentTarget.form.distance.value;
        if (newDate !== '' && newDistance !== '') {
            //e.currentTarget.form.date.value = '';
            //e.currentTarget.form.distance.value = '';
            handleSubmit(newDate, Number(newDistance));
        }
    }

    return (
        <form className="training-form">
            <div className="training-form-block">
                <label htmlFor="date">Дата (дд.мм.гг)</label>
                <input type="date" name="date" value={date} maxLength={8} onChange={onChange} />
            </div>

            <div className="training-form-block">
                <label htmlFor="distance">Пройдено, км</label>
                <input type="text" name="distance" value={distance} onChange={onChange} />
            </div>

            <div className="training-form-block ">
                <input type="submit" className="training-form-button" value="Добавить" onClick={handleClick} />
            </div>
        </form>
    )
};


TrainingForm.propTypes = {
    date: PropTypes.string,
    distance: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
};

TrainingForm.defaultProps = {
    date: '',
    distance: '',
};


export default TrainingForm;