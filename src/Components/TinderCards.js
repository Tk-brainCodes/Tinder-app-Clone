 import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCard.css';
import database from './firebase'





const TinderCards = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        //take a picture of all of the database
        //and put them in a snapshot
        database.collection('people').onSnapshot((snapshot) =>
            setPeople(snapshot.docs.map((doc) => doc.data())
            ));
    }, []);

    return (
        <div>
            <div className="tindercard__Container">
                {people.map((person => (
                    <TinderCard className="Swipe" preventSwipe={['up', 'down']} key={person.name}>
                        <div className="cards" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>
                                {person.name}
                            </h3>
                        </div>
                    </TinderCard>
                )))}

            </div>
        </div>
    );
}
export default TinderCards;