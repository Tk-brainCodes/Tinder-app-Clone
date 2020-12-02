import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import './chatscreen.css';



const ChatScreen = ({name}) => {
    const [input, setInput] = useState('');
    const [messages, setMessage] = useState([
        {
          name: 'Andrew',
          image: 'https://media.gettyimages.com/photos/armie-hammer-of-free-fire-poses-for-a-portrait-at-the-wrap-and-getty-picture-id658440834?s=612x612',
          messages: 'whats up?'  
        },
        {
            name: 'Andrew',
            image: 'https://media.gettyimages.com/photos/armie-hammer-of-free-fire-poses-for-a-portrait-at-the-wrap-and-getty-picture-id658440834?s=612x612',
            messages: 'Hows it going?'  
          },
          {
              messages: "How are you Andrew?"
          }
    ]);

    const handleSend = (e) => {
      e.preventDefault();
      //setMessages to an array of whatever was currently inside of massages
      //As well as a new message of whatever was typed inside your input
      setMessage([...messages, {messages: input}])
      setInput('');
    }

    return (
        <div className="chatScreen"> 
        <p className="chatscreen__timestamp">YOU MATCHED WITH {name} ON 10/08/20</p>
        {messages.map( message =>  (
           message.name ? (
            <div className="chatscreen__message">
            <Avatar
              className="chatscreen__image"
              src={message.image}
              alt={message.image}
            />
               <p className="chatScreenText">{message.messages}</p>
            </div>
           ) : (
               <div className="chatscreen__message">
                 <p className="chatscreen__TextUser">{message.messages}</p>
               </div>
           )
        ))}
         <form className="form__field">
           <input 
           value={input}
           onChange={e => setInput(e.target.value)}
           className="chat__input"
           placeholder="Type in a message..."
           type="text"
           />
           <button onClick={handleSend} type="submit" className="input__button">Send</button>
         </form>
        </div>
  
    )
}

export default ChatScreen;