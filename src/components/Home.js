import PropTypes from 'prop-types'

const Home = ({ name }) => (
    <h1>Welcome to React, {name}!!</h1>
);


Home.propTypes = {
    name: PropTypes.string
};

Home.defaultProps = {
    name: 'user'
};



export default Home;