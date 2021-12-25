import PropTypes from 'prop-types'
import Message from './Message';
import Response from './Response';
import Typing from './Typing';

// id — уникальный идентификатор сообщения, строка;
// from — автор сообщения, объект;
// type — тип сообщения, строка, варианты значений: 
//     response (<Response from={} message={} />), 
//     message (<Message from={} message={} />), 
//     typing (<Typing from={} message={} />);
// time — время публикации сообщения, строка;
// text — текст сообщения, строка, может отсутствовать.

const MessageHistory = ({ list }) => {

    return (
        <>
            {list && list.length && (
                <ul>
                    {list.map((v) => (
                        <li className="clearfix" key={v.id}>
                            {v.type === 'response' ?
                                <Response from={v.from} message={v} /> :
                                v.type === 'message' ?
                                    <Message from={v.from} message={v} /> :
                                    v.type === 'typing' ?
                                        <Typing from={v.from} message={v} /> :
                                        ''
                            }
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
};


MessageHistory.propTypes = {
    list: PropTypes.array
};

MessageHistory.defaultProps = {
    list: []
};


export default MessageHistory;