import PropTypes from 'prop-types'

const Typing = ({ from, message }) => (
    <>
        <div className="message-data">
            <span className="message-data-name">
                <i className={'fa fa-circle' + (from.online ? ' online' : '')}></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
            typing...
        </div>
    </>
);



Typing.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired

};


export default Typing;