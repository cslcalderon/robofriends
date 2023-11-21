import React from 'react';
import './Card.css';

const Card = ({ id, name, email }) => {
    return(
        <div className= 'tc bg-light-orange dib br3 pa3 ma2 grow bw2 shadow-3'>
            <img alt = "robot" src ={`https://robohash.org/${id}test?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;