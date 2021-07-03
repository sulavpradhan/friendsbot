import React from 'react';
import './Card.css';

const Card = ({ name, email, id }) => {
    return (
      <div class ='centerdiv'>
       <div id = 'Card'>
         <img id = 'dp'alt='robots' src={`https://robohash.org/${id}`} />
         <div id='cardtext'>
           <h2>{name}</h2>
           <p id = 'email'>{email}</p>
         </div>
       </div>
      </div>
    );
  }

export default Card;