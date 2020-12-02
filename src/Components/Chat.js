import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import './chats.css';
import { Link } from 'react-router-dom';

//THIS COMPONENT CONTAINS EACH CHATS!

//object destructuring
const Chat = ({ name, message, profilePics, timestamp }) => {
    return (
        <Link className="LinkTo" to={`/chat/${name}`}>
            <div className="chat">
                <Avatar className="chat__image" alt={name} src={profilePics} />
                <div className="chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp">{timestamp}</p>
            </div>
        </Link>
    )
}

export default Chat;