import PropTypes from 'prop-types'

import DelIcon from '../public/DelIcon';
import EditIcon from '../public/EditIcon'

const TrainingTable = ({ items, handleEdit, handleDel }) => {

    function handleSubmit(e) {
        e.preventDefault();

    }

    return (
        <table className="training-table">
            <thead>
                <tr>
                    <th>Дата (дд.мм.гг)</th>
                    <th>Пройдено, км</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {items && items.map((v) => (
                    <tr key={`tr_f_${v.date}`}>
                        <td>{v.date}</td>
                        <td>{v.distance}</td>
                        <td><div>
                            {handleEdit ? <EditIcon id={v.date} handleClick={handleEdit} /> : ''}
                            {handleDel ? <DelIcon id={v.date} handleClick={handleDel} /> : ''}
                        </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};


TrainingTable.propTypes = {
    items: PropTypes.array,         // если Map - то PropTypes.instanceOf(Map),
    handleEdit: PropTypes.func,
    handleDel: PropTypes.func
};

TrainingTable.defaultProps = {
    items: [],
    handleEdit: null,
    handleDel: null

};


export default TrainingTable;