import PropTypes from 'prop-types'

const Message = ({ from, message }) => (
    <>
        <div className="message-data">
            <span className="message-data-name">
                <i className={'fa fa-circle' + (from.online ? ' online' : '')}></i> {from.name}</span>
            <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">
            {message.text}
        </div>
    </>
);



Message.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired

};


export default Message;