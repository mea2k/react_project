import PropTypes from 'prop-types'

const Response = ({ from, message }) => {
    console.log(from.online);
    return (
        <>
            <div className="message-data align-right">
                <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className={'fa fa-circle me' + (from.online ? ' online' : '')}></i>
            </div>
            <div className="message other-message float-right">
                {message.text}
            </div>
        </>
    )
};



Response.propTypes = {
    from: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired

};


export default Response;