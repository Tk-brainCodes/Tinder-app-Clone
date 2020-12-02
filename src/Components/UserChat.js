import React from 'react';
import Chat from './Chat';
import './chats.css';


//THIS COMPONENT CONTAINS EACH CHAT'S OF EVERY INDIVIDAUL!


const Chats = () => {
      return (
          <div className="chats">

          {/*Hardcoded the messages*/}
          <Chat
             name="Andrew"
             message="hey how are you"
             timestamp= "32 minutes ago"
             profilePics="https://media.gettyimages.com/photos/armie-hammer-of-free-fire-poses-for-a-portrait-at-the-wrap-and-getty-picture-id658440834?s=612x612"
          />

          <Chat
             name="Clair"
             message="Hey Dear!"
             timestamp= "4 minutes ago"
             profilePics="https://media.gettyimages.com/photos/woman-using-a-powder-compact-1954-picture-id470373121?k=6&m=470373121&s=612x612&w=0&h=-s-psPXcJ6VAMx5mJ_jGRDM1YzxavwWLLYTCTIPBtMY="
          />

          <Chat
             name="Joe"
             message="Send me your number"
             timestamp= "45 minutes ago"
             profilePics="https://media.gettyimages.com/photos/jeansebastien-rocques-wears-a-hoodie-sweater-a-bomber-jacket-a-bag-picture-id1205201453?k=6&m=1205201453&s=612x612&w=0&h=zo1K93eeb5SlCOZtUBJvoVdOuQB1gi4v48fdqwu5WIg="
          />

          <Chat
             name="Sarah"
             message="hey love"
             timestamp= "2 minutes ago"
             profilePics="https://media.gettyimages.com/photos/portrait-of-a-woman-wearing-an-apple-watch-while-sitting-outside-a-picture-id475683038?k=6&m=475683038&s=612x612&w=0&h=kUQ53JOuaEX9igNIklNYqC_5pDhcg4154YDgVWqcPs8="
          />

          </div>
      )
}

export default Chats;