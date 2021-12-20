import PropTypes from 'prop-types'

import { Months, DaysOfWeek } from './const';

import styles from './main.css';


const CurrentDay = ({ date }) => {
    const dayOfWeek = DaysOfWeek[date.getDay() - 1];
    const day = date.getDate();
    const month = Months[date.getMonth()];
    const year = date.getFullYear();
    return (
        <div className="ui-datepicker-material-header">
            <div className="ui-datepicker-material-day">{dayOfWeek.full}</div>
            <div className="ui-datepicker-material-date">
                <div className="ui-datepicker-material-day-num">{day}</div>
                <div className="ui-datepicker-material-month">{month}</div>
                <div className="ui-datepicker-material-year">{year}</div>
            </div>
        </div>
    )
};


CurrentDay.propTypes = {
    date: PropTypes.instanceOf(Date),            // дата формата JS
};

CurrentDay.defaultProps = {
    date: new Date()
};




export default CurrentDay;
