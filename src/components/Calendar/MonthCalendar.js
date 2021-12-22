import PropTypes from 'prop-types'

import { Months, DaysOfWeek } from './const';

import './main.css';

const MonthCalendar = ({ date }) => {
    let moment = require('moment');
    const mDate = new moment(date);

    const month = Months[date.getMonth()];  // мес€ц
    const year = date.getFullYear();        // год
    const day = date.getDate();             // день мес€ца
    const startOfMonth = new moment(mDate).startOf('month');    // дата начала мес€ца (объект moment)
    const endOfMonth = new moment(mDate).endOf('month');        // дата конца мес€ца (объект moment)

    //console.log("firstdate=" + startOfMonth.format())
    //console.log("lastdate=" + endOfMonth.format())

    let prevs = new Array();
    let afters = new Array();
    let days = [];
    // формирование массива дней предыдущего мес€ца с начала недели
    // структура элемента массива:
    // { 
    //    dayOfMonth: number (1..31),
    //    dayOfWeek: number (0..6),
    //    status: string ('prev')
    // }
    for (let i = 1; i < startOfMonth.day(); i++) {
        // создание копии объекта moment минус i дней
        let newDate = new moment(startOfMonth).subtract(i, "day");
        prevs.push({
            dayOfMonth: newDate.date(),
            dayOfWeek: newDate.day(),
            status: 'prev'
        });
    }
    // переворачиваем массив предыдущих дней
    prevs = prevs.reverse();

    // формируем хвостик в следующем мес€це до конца недели
    for (let i = 0; i < 7 - endOfMonth.day(); i++) {
        // создание копии объекта moment плюс i дней
        let newDate = new moment(endOfMonth).add(i + 1, "day");
        afters.push({
            dayOfMonth: newDate.date(),
            dayOfWeek: newDate.day(),
            status: 'prev'
        });

    }

    // формирование массива дней текущего мес€ца
    // структура элемента массива:
    // { 
    //    dayOfMonth: number (1..31),
    //    dayOfWeek: number (0..6),
    //    lastWeekDay: boolean (true - значит воскресенье (день 0))
    //    status: string ('now' - текущий день, 'current' - остальные дни мес€ца)
    // }
    for (let i = 0; i < endOfMonth.date(); i++) {
        let newDate = new moment(startOfMonth).add(i, "day");
        days.push({
            dayOfMonth: newDate.date(),
            dayOfWeek: newDate.day(),
            lastWeekDay: newDate.day() === 0,
            status: newDate.date() === day ? 'now' : 'current'
        });
    }
    //console.log(days);

    // формирование массива недель (массив из массивов дней, разбитых по недел€м)
    const weeks = [];
    // начальна€ запись - хвост с предыдущего мес€ца
    let curWeek = prevs;
    // добавл€ем записи в curWeek, пока не конец недели
    // а потом добавл€ем curWeek к массиву недель (weeks)
    days.map((v, key) => {
        curWeek.push(v);
        if (v.lastWeekDay) {
            weeks.push(curWeek);
            curWeek = [];
        }
    });
    // добавл€ем остаток из нового мес€ца 
    curWeek = curWeek.concat(afters);
    // добавл€ем неделю в массив недель
    weeks.push(curWeek);
    //console.log(weeks);

    return (
        <div>
            <div className="ui-datepicker-header">
                <div className="ui-datepicker-title">
                    <span className="ui-datepicker-month">{month}</span>&nbsp;<span className="ui-datepicker-year">{year}</span>
                </div>
            </div>
            <table className="ui-datepicker-calendar">
                <colgroup>
                    {DaysOfWeek.map((v, key) => (
                        v.isDayOff ?
                            (<col className="ui-datepicker-week-end" key={`col_${key}`} />)
                            :
                            (<col key={`col_${key}`} />)
                    ))}
                </colgroup>
                <thead>
                    <tr>
                        {DaysOfWeek.map((v, key) => (
                            <th scope="col" title={v.full} key={`th_${key}`}>{v.short}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {weeks && weeks.map((v, key) => (
                        <tr key={`week_tr_${key}`}>
                            {v.map((v2, key2) => (
                                <td
                                    className={
                                    v2.status === 'prev' ? 'ui-datepicker-other-month'
                                  : v2.status === 'now' ?  'ui-datepicker-today'
                                 : ''}
                                    key={`td_${key2}`}
                                >
                                    {v2.dayOfMonth}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
};


MonthCalendar.propTypes = {
    date: PropTypes.instanceOf(Date),            // дата формата JS
};

MonthCalendar.defaultProps = {
    date: new Date()
};




export default MonthCalendar;
