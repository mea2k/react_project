import MessageHistory from './MessageHistory';

import { Messages } from './const';

import './main.css';

const MessageHistoryLayout = () => {

    return (
        <div>
            <h1>История сообщений</h1>
            <h3>Компонент MessageHistory, MessageHistoryLayout</h3>
            <div className="clearfix chat-container">
                <div className="chat">
                    <div className="chat-history">
                        <MessageHistory list={Messages} />
                    </div>
                </div>
            </div>
        </div>
    )
};


export default MessageHistoryLayout;