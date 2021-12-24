import PropTypes from 'prop-types'
import Star from './Star';


const Stars = ({ count }) => {

    return (
        <div>
            <ul className="card-body-stars u-clearfix">
                {count <=5 && count >=0 && Array(count).fill(0).map(()=> <Star /> )}
            </ul>
        </div>
    )
};



Stars.propTypes = {
    count: PropTypes.number
};

Stars.defaultProps = {
    count: 0
};


export default Stars;
