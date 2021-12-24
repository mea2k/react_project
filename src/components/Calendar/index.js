import PropTypes from 'prop-types'

import CurrentDay from './CurrentDay';
import MonthCalendar from './MonthCalendar';

import './main.css';





const Calendar = ({ date }) => {
    return (
        <div className="ui-datepicker">
            <h1>Календарь</h1>
            <h3>Компонент Calendar</h3>
            <CurrentDay date={date} />

            <MonthCalendar date={date} />
        </div>
    )
};


Calendar.propTypes = {
    date: PropTypes.instanceOf(Date),            // дата формата JS
};

Calendar.defaultProps = {
    date: new Date()
};


export default Calendar;
