import PropTypes from 'prop-types'

import './main.css';

const Toolbar = ({ filters, selected, handleSelectFilter }) => {

    return (
        <div className="items">
            <table>
                <tbody>
                    <tr>
                        {filters && filters.map((v, key) => (
                            <td className={v === selected ? 'backgroundDark' : 'backgroundLight'}
                                onClick={(e) => handleSelectFilter(e.currentTarget.textContent)}
                                key={`toolbar_${key}`}
                            >
                                {v}
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};


Toolbar.propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    handleSelectFilter: PropTypes.func
};

Toolbar.defaultProps = {
    filters: [],
    selected: null,
    handleSelectFilter: (v) => { console.log(v) }
};



export default Toolbar;