import PropTypes from 'prop-types'

import { Months, DaysOfWeek } from './const';

import styles from './main.css';

const MonthCalendar = ({ date }) => {
    let moment = require('moment');
    const mDate = new moment(date);

    const month = Months[date.getMonth()];  // �����
    const year = date.getFullYear();        // ���
    const day = date.getDate();             // ���� ������
    const startOfMonth = new moment(mDate).startOf('month');    // ���� ������ ������ (������ moment)
    const endOfMonth = new moment(mDate).endOf('month');        // ���� ����� ������ (������ moment)

    //console.log("firstdate=" + startOfMonth.format())
    //console.log("lastdate=" + endOfMonth.format())

    let prevs = new Array();
    let days = [];
    // ������������ ������� ���� ����������� ������ � ������ ������
    // ��������� �������� �������:
    // { 
    //    dayOfMonth: number (1..31),
    //    dayOfWeek: number (0..6),
    //    status: string ('prev')
    // }
    for (let i = 1; i < startOfMonth.day(); i++) {
        // �������� ����� ������� moment ����� i ����
        let newDate = new moment(startOfMonth).subtract(i, "day");
        prevs.push({
            dayOfMonth: newDate.date(),
            dayOfWeek: newDate.day(),
            status: 'prev'
        });
    }
    // �������������� ������ ���������� ����
    prevs = prevs.reverse();

    // ������������ ������� ���� �������� ������
    // ��������� �������� �������:
    // { 
    //    dayOfMonth: number (1..31),
    //    dayOfWeek: number (0..6),
    //    lastWeekDay: boolean (true - ������ ����������� (���� 0))
    //    status: string ('now' - ������� ����, 'current' - ��������� ��� ������)
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

    // ������������ ������� ������ (������ �� �������� ����, �������� �� �������)
    const weeks = [];
    // ��������� ������ - ����� � ����������� ������
    let curWeek = prevs;
    // ��������� ������ � curWeek, ���� �� ����� ������
    // � ����� ��������� curWeek � ������� ������ (weeks)
    days.map((v, key) => {
        curWeek.push(v);
        if (v.lastWeekDay) {
            weeks.push(curWeek);
            curWeek = [];
        }
    });
    // ��������� ������� � ������ ������
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
                        <tr>
                            {v.map((v2, key2) => (
                                v2.status === 'prev' ? (
                                    <td className="ui-datepicker-other-month" key={`td_${key2}`}>{v2.dayOfMonth}</td>
                                ) : v2.status === 'now' ? (
                                    <td className="ui-datepicker-today" key={`td_${key2}`}>{v2.dayOfMonth}</td>
                                ) : (
                                    <td>{v2.dayOfMonth}</td>
                                )
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
};


MonthCalendar.propTypes = {
    date: PropTypes.instanceOf(Date),            // ���� ������� JS
};

MonthCalendar.defaultProps = {
    date: new Date()
};




export default MonthCalendar;
